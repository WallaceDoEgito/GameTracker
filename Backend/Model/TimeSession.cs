namespace JogosDoAno.Model
{
    public class TimeSession
    {
        public int GameId { get; set; }
        public DateOnly SessionDate {get; set;}
        public TimeOnly SessionHours {get; set;}
    }
}