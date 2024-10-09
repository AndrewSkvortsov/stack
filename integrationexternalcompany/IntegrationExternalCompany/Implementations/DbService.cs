using IntegrationExternalCompany.Declarations;
using IntegrationExternalCompany.Entity.Context;
using Microsoft.EntityFrameworkCore;

namespace IntegrationExternalCompany.Implementations
{
    public class DbService<T> : IDbService<T>
    {
        public async Task<int> Create(T item)
        {
            using ApplicationContext db = new();
            _ = await db.AddAsync(item);
            return await db.SaveChangesAsync();
        }

        public async Task<int> Delete(T item)
        {
            using ApplicationContext db = new();
            _ = db.Remove(item);
            return await db.SaveChangesAsync();
        }

        public async Task<int> Update(T item)
        {
            using ApplicationContext db = new();
            _ = db.Update(item);
            return await db.SaveChangesAsync();
        }

        public async Task<IList<T>> Get<T>() where T : class
        {
            using ApplicationContext db = new();
            return await db.Set<T>().ToListAsync();
        }
    }
}