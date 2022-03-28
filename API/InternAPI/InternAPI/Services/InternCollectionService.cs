using InternAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        public Task<List<Intern>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Intern> Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Create(Intern model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(Guid id, Intern model)
        {
            throw new NotImplementedException();
        }
    }
}
