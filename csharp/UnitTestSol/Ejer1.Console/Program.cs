using Ejer1.Console;

var user_email = "";
var u_email = new Email();

while (true)
{
    Console.WriteLine("Escribe un email");
    user_email = Console.ReadLine();
    if (user_email == "quit")
    { break; }
    else
    {
        if (user_email == null)
            throw new Exception("No puede ser null");
        else
        {
            if (u_email.VerifyEmail(user_email) == true)
            {
                if (u_email.aniadir_email(user_email) == true)
                {
                    Console.WriteLine("Se inserto correctamente el correo");
                }
                else
                {
                    Console.WriteLine("Ya se ha validado el correo electronico");
                }
            }
        }
    }
}
Console.WriteLine(u_email.Users_Email);