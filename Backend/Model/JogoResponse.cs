using System.Text.Json.Serialization;
public class JogoResponse{
    public int GameId { get; set; }
    public string? GameName { get; set; }
    public string? GameImageUrl { get; set; }
    public double? HoursPlayed {get; set;}
    public string? Review { get; set; }
    public byte Rating { get; set; }
    public string? BackgroundCoverUrl {get; set;}

    // [JsonConstructor]
    // public JogoResponse(int gameId, string gameName, string gameImageUrl, double hoursPlayed, string review, byte rating)
    // {
    //     GameId = gameId;
    //     GameName = gameName;
    //     GameImageUrl = gameImageUrl;
    //     HoursPlayed = hoursPlayed;
    //     Review = review;
    //     Rating = rating;
    // }

}