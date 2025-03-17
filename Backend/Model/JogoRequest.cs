using System.Text.Json.Serialization;

namespace JogosDoAno.Model;
public class JogoRequest{
    public string? GameName { get; set; }
    public string? GameImageUrl { get; set; }
    public double HoursPlayed {get; set;}
    public string? Review { get; set; }
    public byte Rating { get; set; }


    // [JsonConstructor]
    // public JogoRequest(string gameName, string gameImageUrl, double hoursPlayed, string review, byte rating)
    // {
    //     GameName = gameName;
    //     GameImageUrl = gameImageUrl;
    //     HoursPlayed = hoursPlayed;
    //     Review = review;
    //     Rating = rating;
    // }

}

