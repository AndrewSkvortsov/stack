using IntegrationExternalCompany.Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace IntegrationExternalCompany.Entity.Context
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users => Set<User>();
        public ApplicationContext() => Database.EnsureCreated();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Data/integrationExternatCompany.db");
        }
    }
}