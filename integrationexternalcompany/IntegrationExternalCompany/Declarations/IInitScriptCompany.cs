using IntegrationExternalCompany.Model;

namespace IntegrationExternalCompany.Declarations
{
    public interface IInitScriptCompany
    {
        Task<string> GetInit(string companyName);
        Task<WebHook> GetWebHook(string companyName);
    }
}