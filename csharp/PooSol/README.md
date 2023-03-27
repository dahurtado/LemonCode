# C#03 - Programacion orientada a objetos (POO)

## Ejercicios

 - [Read books](https://github.com/dahurtado/LemonCode/blob/main/csharp/PooSol/Ejer1/Program.cs)
 - [Slot machine](https://github.com/dahurtado/LemonCode/blob/main/csharp/PooSol/Ejer2/Program.cs)
	- [Clase Tragaperra](https://github.com/dahurtado/LemonCode/blob/main/csharp/PooSol/LibreriaPoo/Tragaperra.cs)


---


1.  [Read books](https://github.com/dahurtado/LemonCode/blob/main/csharp/PooSol/Ejer1/Program.cs)

	Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con <code>title</code> como string y <code>isRead</code> como booleano. En caso de no existir el libro devolver <code>false</code>.

	```csharp
	public bool IsBookRead(Boook books, string titleToSearch)
	{
		// Implementation here
	}
	```

	### Ejemplo
	```csharp
	var books = new Book[] {
		new Book
		{
			Title = "Harry Potter y la piedra filosofal",
			IsRead = true
		},
		new Book
		{
			Title = "Canción de hielo y fuego",
			IsRead = false
		},
		new Book
		{
			Title = "Devastación",
			IsRead = true
		},
	}; 

	Console.WriteLine(IsBookRead(books, "Devastación")); // true
	Console.WriteLine(IsBookRead(books, "Canción de hielo y fuego")); // false
	Console.WriteLine(IsBookRead(books, "Los Pilares de la Tierra")); // false
	```
2. [Slot machine](https://github.com/dahurtado/LemonCode/blob/main/csharp/PooSol/Ejer2/Program.cs) (**No apuestes si eres menor de 18**)

	El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.

	Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean <code>true</code>, y por tanto deberá mostrarse por consola el mensaje:

	``` csharp
	"Congratulations!!!. You won <número de monedas> coins!!";
	```
	y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
	``` csharp
	"Good luck next time!!".
	```

	Se preguntará al usuario si quiere jugar o dejar.

	- Si el usuario elige jugar. Se llamará al método play.
	- Si usuario elige cualquier otra opción se terminará la ejecución de la aplicación.