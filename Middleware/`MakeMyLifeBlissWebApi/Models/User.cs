using System;
using System.Collections.Generic;

namespace _MakeMyLifeBlissWebApi.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string Email { get; set; }
        public int? MobileNo { get; set; }
        public string Password { get; set; }
        public int? Status { get; set; }
    }
}
