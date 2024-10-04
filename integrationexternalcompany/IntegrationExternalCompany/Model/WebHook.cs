using System;

namespace IntegrationExternalCompany.Model
{
    public class WebHook
    {
        public required string Name { get; set; }
        public required string Version { get; set; }
        public required string Description { get; set; }
        public required string Command { get; set; }
    }
}