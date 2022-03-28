using System;

namespace InternAPI.Models
{
    public class Intern
    {
        public Guid id { get; set; }
        public string name { get; set; }  
        public string age { get; set; }
        public DateTime dateOfBirth { get; set; }
        public string studies { get; set; } 
        public string mentor  { get; set; }
    }
}
