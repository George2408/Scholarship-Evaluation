using InternAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternAPI.Services
{
    public interface    IInternCollectionService : ICollectionService<Intern>
    {
        Task<List<Intern>> GetAll();

        Task<Intern> Get(Guid id);

        Task<bool> Create(Intern model);

        Task<bool> Update(Guid id, Intern model);

        Task<bool> Delete(Guid id);
    }
}
