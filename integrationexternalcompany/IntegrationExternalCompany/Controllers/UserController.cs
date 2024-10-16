using IntegrationExternalCompany.Declarations;
using IntegrationExternalCompany.Entity.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace IntegrationExternalCompany.Controllers
{
    [Route("api/[controller]")]
    public class UserController(IDbService<User> dbService) : Controller
    {
        private readonly IDbService<User> _dbService = dbService;

        [Route("/get")]
        [HttpGet]
        public async Task<User[]> Get() => [.. (await _dbService.Get<User>())];

        [Route("/login")]
        [HttpPost]
        public async Task<bool> Login([FromBody] UserAuth userAuth)
            => (await _dbService.Get<User>()).Any(a => a.Login == userAuth.Login && a.Key == userAuth.Key);

        [Route("/create")]
        [HttpPost]
        public async Task<int> Create(User user) => await _dbService.Create(user);

        [Route("/update")]
        [HttpPost]
        public async Task<int> Update(User user) => await _dbService.Update(user);

        [Route("/delete")]
        [HttpPost]
        public async Task<int> Delete(int userId)
        {
            var user = (await _dbService.Get<User>()).FirstOrDefault(f => f.Id == userId);
            return await _dbService.Delete(user);
        }
    }
}