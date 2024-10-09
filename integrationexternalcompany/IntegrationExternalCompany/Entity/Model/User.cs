namespace IntegrationExternalCompany.Entity.Model
{
    public class User
    {
        public int Id { get; set; }
        public required string Login { get; set; }
        public string? FullName { get; set; }
        public required string Key { get; set; }
    }
}