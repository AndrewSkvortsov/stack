state=0
componyRegistry="{componyRegistry}"
componyTocken="{componyTocken}"
componyLogin="{componyLogin}"
componyCompose="{componyCompose}"

if [ "$EUID" -ne 0 ]
  then echo "Please run terminal as root session!"
  exit
fi

CheckInstaled()
{
  if ! which $1 > /dev/null ; then
      echo -e "Command ${1} not found! \nInstall? (Y/n) \c"
      read
            if [ "$REPLY" = "Y" ]; then
                case ${1} in
                    "docker")
                    Dockerinstall && 
                    echo -e "Is instaled OK: ${docker -v}" || state=1
                      ;;
                    "docker compose")
                    apt-get install docker-compose-plugin -y && 
                    echo -e "Is instaled OK: ${docker version}" || state=1
                      ;;
                    *)
                    apt-get install ${1} -y &&
                    echo -e "Is instaled OK: ${1}" || state=1
                      ;;
                esac
            else  echo "Shutdown script....." ; exit 1;
        fi
    else echo -e "${1} is instaled OK path: $(which ${1})"
    fi
}

Dockerinstall()
{
    osSystem=$(release=$(lsb_release  -i | awk '{print $NF}'); echo -e "${release,,}"); 
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do apt-get remove $pkg; done
    apt-get update -y && apt-get install ca-certificates  -y
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/${osSystem}/gpg -o /etc/apt/keyrings/docker.asc
    chmod a+r /etc/apt/keyrings/docker.asc
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/${osSystem} $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | 
    tee /etc/apt/sources.list.d/docker.list > /dev/null
    apt-get update -y
}

for commands in curl docker "docker compose"; do CheckInstaled $commands; done

echo "### Install conteiners ###"
echo "$componyCompose" > docker-compose.yml
docker login $componyRegistry -u $componyLogin -p $componyTocken
docker compose pull 
docker compose up -d
rm -f docker-compose.yml