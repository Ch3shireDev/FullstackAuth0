using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ResourceAPI.Controllers
{
    [ApiController]
    [Route("api")]
    public class DefaultController : ControllerBase
    {
        private readonly ILogger<DefaultController> _logger;

        public DefaultController(ILogger<DefaultController> logger)
        {
            _logger = logger;
        }

        [Route("public")]
        [HttpGet]
        public ActionResult GetPublic()
        {
            return StatusCode(200, "public message");
        }

        [Route("private")]
        [HttpGet]
        [Authorize]
        public ActionResult GetPrivate()
        {
            return StatusCode(200, "private message! You need to be logged in to see it.");
        }
    }
}