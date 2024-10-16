using System;

namespace IntegrationExternalCompany.Entity.Model
{
    public class UserAuth
    {
        public required string Login { get; set; }
        public required string Key { get; set; }
        public bool Remember { get; set; }
    }
}
