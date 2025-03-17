using JogosDoAno.Connection;
using JogosDoAno.Model;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class JogosController: ControllerBase {
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult CreateGame(JogoRequest game){
        JogoResponse? gameInserted = DatabaseConnec.Insert(game);
        if(gameInserted == null){
            return BadRequest(new{mensage = "Nao foi possivel inserir"});
        }
        return Created(string.Empty, gameInserted);
    }
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status503ServiceUnavailable)]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult GetAllGames(){
        var result = DatabaseConnec.GetAll();
        if(result == null) return StatusCode(503, new {mensage = "O sistema esta fora do ar nesse momento, tente mais tarde"});
        return Ok(result);
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult DeleteGame(int id){
        int rowsDeleted = DatabaseConnec.Delete(id);
        if(rowsDeleted == 0) return NotFound(new {Message = "Nao foi encontrado um jogo com esse id"});
        return Ok(new{
            Message = "O Jogo foi deletado com sucesso"
        });
    }

    [HttpPatch("{id}")]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult PatchGame(int id, JogoRequest toUpdate){
        int columnAffected = DatabaseConnec.Update(toUpdate, id);
        if(columnAffected == 0) return NotFound(new{mensage = "Id not found"});
        return Ok(toUpdate);
    }

}