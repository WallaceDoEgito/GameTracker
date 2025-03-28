using System.ComponentModel.Design;
using Dapper;
using JogosDoAno.Model;
using Microsoft.Data.SqlClient;

namespace JogosDoAno.Connection;

public static class DatabaseConnec{
    private static string ConnectionString = "Server=db,1433;User Id=sa;Password=JRhPRt&n#xs03i*XRCja2!;Database=GameTracker;TrustServerCertificate=True;";
    public static JogoResponse? Insert(JogoRequest game){
        string insertQuery = "INSERT INTO Jogos(GameName,GameImageUrl,HoursPlayed,Review,Rating,BackgroundCoverUrl) OUTPUT INSERTED.* VALUES(@GameName, @GameImageUrl, @HoursPlayed, @Review, @Rating, @BackgroundCoverUrl)";
        try {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var gameInserted = connection.QuerySingle<JogoResponse>(insertQuery, game);
                return gameInserted;
            }
        }
        catch {
            return null;
        }
    }

    public static List<JogoResponse>? GetAll(){
        string selectionQuery = "SELECT * FROM Jogos ORDER BY HoursPlayed DESC";
        try
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var games = connection.Query<JogoResponse>(selectionQuery).ToList();
                return games;
            }
        }       
        catch
        {
            return null;
        }
    }

    public static int Delete(int id){
        string selectionQuery = "DELETE FROM Jogos WHERE GameId = @Id";
        using (var connection = new SqlConnection(ConnectionString))
        {
            int games = connection.Execute(selectionQuery, new {Id = id});
            return games;
        }
    }

    public static int UpdateFull(JogoRequest toupdate, int id){
        string updateString = "UPDATE Jogos SET GameName = @GameName, GameImageUrl = @GameImageUrl, BackgroundCoverUrl = @BackgroundCoverUrl, HoursPlayed = @HoursPlayed, Review = @Review, Rating = @Rating WHERE GameId = @Id";
        using (var connection = new SqlConnection(ConnectionString)){
            int games = connection.Execute(updateString, new
            {
                GameName = toupdate.GameName, GameImageUrl = toupdate.GameImageUrl,
                BackgroundCoverUrl = toupdate.BackgroundCoverUrl,
                HoursPlayed = toupdate.HoursPlayed, Review = toupdate.Review,
                Rating = toupdate.Rating, Id = id
            });
            return games;
        }
    }
}
