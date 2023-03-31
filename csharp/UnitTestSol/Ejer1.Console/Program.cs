using Ejer1.Console;

var user_email = "";

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
            var u_email = new Email(user_email);
            Console.WriteLine(u_email.VerifyEmail(user_email));
        }
    }
    
}