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
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult CreateSession(int id, TimeSession toCreate)
        {
            if(id == 0 || toCreate.SessionDate == DateOnly.MinValue || toCreate.SessionHours == TimeOnly.MinValue) return StatusCode(400, new {mensage = "Verifique os campos e tente novamente"});
            var Check = DatabaseConnec.GetById(id);
            if(Check == null) return StatusCode(400, new {mensage = "Nao existe nenhum jogo com o id fornecido"});
            int Changes = DatabaseConnec.PostSession(id, toCreate);
            if(Changes == 0) return StatusCode(500, new {mensage = "Nao foi possivel inserir devido a um erro do servidor"});
            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetSessions(int id)
        {
            var Check = DatabaseConnec.GetById(id);
            if(Check == null) return StatusCode(400, new {mensage = "Nao existe nenhum jogo com o id fornecido"});
            List<TimeSession>? allSessions = DatabaseConnec.GetSessions(id);
            if (allSessions == null) return StatusCode(400, new {mensage = "Verifique os campos e tente novamente"});
            return StatusCode(200, allSessions);
        }
        
    }
}