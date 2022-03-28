using InternAPI.Models;
using InternAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace InternAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternController : Controller
    {
        IInternCollectionService _internCollectionService;
        public InternController(IInternCollectionService noteCollectionService)
        {
            _internCollectionService = noteCollectionService ?? throw new ArgumentNullException(nameof(noteCollectionService));
        }

        [HttpGet]
        public async Task<IActionResult> GetInterns()
        {
            return Ok(await _internCollectionService.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInternById(Guid id)
        {
            return Ok(await _internCollectionService.Get(id));
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateIntern([FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("The intern cannot be null.");
            }

            await _internCollectionService.Create(intern);
            return Ok("The intern was added.");

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<string>> UpdateIntern([FromBody] Intern intern, Guid id)
        {
            if (intern == null)
            {
                return BadRequest("Then intern cannot be null.");
            }
            else if (!await _internCollectionService.Update(id, intern))
            {
                return NotFound("The intern was not found but it was added.");
            }
            return Ok("The intern was updated");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteIntern(Guid id)
        {
            if (!await _internCollectionService.Delete(id))
            {
                return NotFound("The intern was not found.");
            }

            return Ok("The intern was deleted.");

        }


    }
}
