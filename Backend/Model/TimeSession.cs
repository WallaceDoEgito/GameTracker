using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace JogosDoAno.Model
{
    public class TimeSession
    {

        [Required]
        public DateOnly SessionDate 
        {
            get;
            set;
        }
        [Required]
        public TimeOnly SessionHours
        {
            get;
            set;
        }

        public TimeSession(DateTime sessionDate, TimeSpan sessionHours)
        {
            SessionDate = DateOnly.FromDateTime(sessionDate);
            SessionHours = TimeOnly.FromTimeSpan(sessionHours);

        }
        public TimeSession(){}
    }
}