using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Ejer1.Console
{
    internal class Email
    {
        public string? User_Email { get; set; }

        public Email(string? user_email)
        {
            user_email = User_Email;
        }

        public bool VerifyEmail(string email)
        {
            return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");
        }
    }
}
