# build client
FROM node:20 AS node_container
WORKDIR /client
COPY /client/. .
RUN npm ci
RUN npm run build

# build dotnet project
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 1320

ENV ASPNETCORE_URLS=http://+:1320

USER app
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["IntegrationExternalCompany.csproj", "IntegrationExternalCompany/"]
RUN dotnet restore "IntegrationExternalCompany/IntegrationExternalCompany.csproj"
WORKDIR "/src/IntegrationExternalCompany"
COPY . .
RUN dotnet build "IntegrationExternalCompany.csproj" -c Release -o /app/build


FROM build AS publish
ARG configuration=Release
RUN dotnet publish "IntegrationExternalCompany.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node_container /client/build ./client/build
ENTRYPOINT ["dotnet", "IntegrationExternalCompany.dll"]