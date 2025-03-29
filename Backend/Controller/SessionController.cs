using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using JogosDoAno.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using JogosDoAno.Connection;

namespace Backend.Controller
{
    [Route("api/[controller]")]
    public class SessionController : ControllerBase
    {
        [HttpPost("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult CreateSession(int id, TimeSession toCreate)
        {
            int Changes = DatabaseConnec.PostSession(id, toCreate);
            if(Changes == 0) return StatusCode(400, new {mensage = "Verifique os campos e tente novamente"});
            return Created();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetSessions(int id)
        {
            List<TimeSession>? allSessions = DatabaseConnec.GetSessions(id);
            if (allSessions == null) return StatusCode(400, new {mensage = "Verifique os campos e tente novamente"});
            return StatusCode(200, allSessions);
        }
        
    }
}