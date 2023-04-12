# C#06 - Testing - Ejer1.Console

## [Email.cs](https://github.com/dahurtado/LemonCode/blob/main/csharp/UnitTestSol/Ejer1.Console/Email.cs)

Objeto Email con el que se validan emails y se anaden a una lista si pasa por unos requisitos.

``` csharp
//He usado un string y no un Array porque me daba errores y warnings de que el Array podria ser null. Al final acabo separandolo como un array para compararlo.
public string? Users_Email { get; set; }

// Funcion que mediante expresiones regulares, valida el email que se manda por parametro
public bool VerifyEmail(string email)
{
	return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");
}

//Funcion que anade a emails validos y no repetidos a una lista de emails.
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
```

---
---

## [Program.cs](https://github.com/dahurtado/LemonCode/blob/main/csharp/UnitTestSol/Ejer1.Console/Program.cs)

Programa principal. En este se realiza un bucle para insertar emails hasta que se anade la palabra <code>quit</code>.

En este programa se puede comprobar porque motivos los emails no se insertan.

Al final del programa se imprimen los emails validos que se han insertado.

``` csharp
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
```