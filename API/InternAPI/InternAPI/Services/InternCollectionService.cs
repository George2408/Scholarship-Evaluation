using InternAPI.Models;
using InternAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _interns;

        public InternCollectionService(IMongoDBSettings mongoDBSettings)
        {
            var client = new MongoClient(mongoDBSettings.ConnectionString);
            var database = client.GetDatabase(mongoDBSettings.DatabaseName);

            _interns = database.GetCollection<Intern>(mongoDBSettings.InternCollectionName);
        }

        public async Task<List<Intern>> GetAll()
        {
            return (await _interns.FindAsync(intern => true)).ToList();
        }

        public async Task<Intern> Get(Guid id)
        {
            return (await _interns.FindAsync(intern => intern.id == id)).FirstOrDefault();
        }

        public async Task<bool> Create(Intern intern)
        {
            if (intern.id == Guid.Empty)
            {
                intern.id = Guid.NewGuid();
            }
            await _interns.InsertOneAsync(intern);
            return true;
        }

        public async Task<bool> Update(Guid id, Intern intern)
        {
            intern.id = id;
            var result = await _interns.ReplaceOneAsync(intern => intern.id == id, intern);

            if (result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _interns.InsertOneAsync(intern);
                return false;
            }

            return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _interns.DeleteOneAsync(intern => intern.id == id);
            if (!result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }
    }
}
