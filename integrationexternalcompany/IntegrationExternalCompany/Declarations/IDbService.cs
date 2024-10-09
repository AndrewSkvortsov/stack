namespace IntegrationExternalCompany.Declarations
{
    public interface IDbService<Ttable>
    {
        Task<IList<Ttable>> Get<Ttable>() where Ttable : class;
        Task<int> Create(Ttable item);
        Task<int> Update(Ttable item);
        Task<int> Delete(Ttable item);
    }
}