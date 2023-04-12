using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Ejer1.Console
{
    public class Email
    {
        public string? Users_Email { get; set; }

        public bool VerifyEmail(string email)
        {
            return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");
        }

        public bool aniadir_email(string email)
        {
            if (VerifyEmail(email) == true)
            {
                if (Users_Email == null)
                {
                    Users_Email = email;
                    return true;
                }
                else
                {
                    var array_users = Users_Email.Split(", ");
                    foreach (var user in array_users)
                    {
                        if (user == email)
                        {
                            return false;
                        }
                    }
                    Users_Email += $", {email}";
                    return true;
                }
            }
            return false;
        }
    }
}
