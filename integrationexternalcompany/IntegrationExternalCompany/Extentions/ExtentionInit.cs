using IntegrationExternalCompany.Model;

namespace IntegrationExternalCompany.Extentions
{
    public static class ExtentionInit
    {
        //Todo add Consul
        public const string URLGITLAB = "https://gitlab.YourDomain.ru/DevOps/integrationexternalcompany/-/raw/main/";
        public const string URLTOCOMPANY = "https://instruction.YourDomain.ru";
        public const string URLTOCOMPANYBASH = $"bash <(curl -s {URLTOCOMPANY}/init/)";
        public static Instruction BashScriptUrl(this string company) => new() { Url = $"bash <(curl -s {URLTOCOMPANY}/init/{company})" };
    }
}
