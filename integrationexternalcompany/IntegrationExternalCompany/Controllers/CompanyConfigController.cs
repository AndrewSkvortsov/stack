
using IntegrationExternalCompany.Declarations;
using IntegrationExternalCompany.Extentions;
using IntegrationExternalCompany.Model;
using Microsoft.AspNetCore.Mvc;

namespace IntegrationExternalCompany.Controllers
{
    [Route("api/config/company")]
    [ApiController]
    public class CompanyConfigController(IInitScriptCompany initScriptCompany) : Controller
    {
        readonly IInitScriptCompany _initScriptCompany = initScriptCompany;

        [Route("/init/{companyName}")]
        [HttpGet]
        public async Task<string> GetInit(string companyName) => await _initScriptCompany.GetInit(companyName);

        [Route("/instruction/{companyName}")]
        [HttpGet]
        public Instruction GetInstruction(string companyName) => companyName.BashScriptUrl();

        [Route("/webhook/{companyName}")]
        [HttpGet]
        public async Task<WebHook> GeWebHook(string companyName) => await _initScriptCompany.GetWebHook(companyName);
    }
}
