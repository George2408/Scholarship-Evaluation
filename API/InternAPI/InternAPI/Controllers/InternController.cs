using InternAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System;

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

    }
}
