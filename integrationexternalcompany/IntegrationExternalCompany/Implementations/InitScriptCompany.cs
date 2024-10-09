using IntegrationExternalCompany.Configuration;
using IntegrationExternalCompany.Declarations;
using IntegrationExternalCompany.Extentions;
using IntegrationExternalCompany.Model;

namespace IntegrationExternalCompany.Service
{
    public class InitScriptCompany : IInitScriptCompany
    {
        public async Task<string> GetInit(string companyName)
        {
            var shScript = await GetRequest($"{ExtentionInit.URLGITLAB}/init/init.sh");
            var componyCompose = await GetRequest($"{ExtentionInit.URLGITLAB}Company/{companyName}/docker-compose.yml");
            var result = shScript
                .Replace("{componyRegistry}", Config.componyRegistry)
                .Replace("{componyTocken}", Config.componyTocken)
                .Replace("{componyLogin}", Config.componyLogin)
                .Replace("\r", "")
                .Replace("{componyCompose}", componyCompose);
            return result;
        }

        public async Task<WebHook> GetWebHook(string companyName)
        {
            //ToDo Create Implementetion
            var result = await Task<WebHook>.Factory.StartNew(() => new WebHook
            {
                Name = companyName,
                Version = "1.0.0",
                Description = "Исправлены контракты, ошибки в передачи данных",
                Command = "docker-compose up -d"
            }
            );

            return result;
        }

        private static async Task<string> GetRequest(string url)
        {
            HttpClient httpClient = new();
            using HttpResponseMessage result = await httpClient.GetAsync(url);
            return await result.Content.ReadAsStringAsync();
        }
    }
}