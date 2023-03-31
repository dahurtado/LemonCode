# C#05 - WebAPI

## Ejercicios
1. [ActorAPI](https://github.com/dahurtado/LemonCode/tree/main/csharp/WebAPISol/WebAPI)

	Continuar el ejemplo del ejercicio e implementar los metodos que han quedado pendientes.
 - Funciones a implementar:
	- Obtener un Actor por su ID
	- Modificar un Actor
	- Borrar un Actor

2. [AlmacenAPI](https://github.com/dahurtado/LemonCode/tree/main/csharp/WebAPISol/AlmacenAPI)

	Crear una nueva *Web API* para la gestion de un almacen. El controlador debera permitir las siguientes funciones.

 - Anadir nuevo Articulo. Un articulo tendra los siguientes campos:
	
	- Id.
	- Nombre.
	- Decripcion
	- Fecha de entrada
	- Cantidad

	> El objeto que se manda por *HttpPost* solo tiene los atributos nomnre, descripcion y cantidad. Ya que para garantizar un mejor uso para el usuario, la ID se crea automaticamente y la fecha se inserta tomando la fecha actual.
 - Entrada y retirada de articulo.
	- En caso de no existir el articulo, devolvera *NotFound*
	- Si al retirar un articulo, se produce un calculo que deje un numero negativo, devolvera *BadRequest*
	> La forma en la que he realizado la funcion es mandando como paramentros la ID y la cantidad que se quiere modificar.
	>
	> Cantidad: Tiene que expresarse el signo numerico para sumar y restar. Si quieres retirar articulos, se tiene que poner el signo negativo delante del numero que quieres restar.