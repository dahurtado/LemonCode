# C#04 - LINQ (Language Integrated Query) - Clase Paciente

 - [Program.cs](https://github.com/dahurtado/LemonCode/blob/main/csharp/LINQSol/EjerLinq/Program.cs)

## Anotaciones de ejercicio

- Este ejercicio lo he planeado por funciones, en cada funcion esta la consulta que se pide en cada enunciado.
- <code>generar_lista()</code>
	- Funcion que contiene la informacion de los usuarios y se inicia en las primeras lineas de *Main(string[] args)*. Devuelve la una lista con todos los objetos *Paciente* que se han declarado dentro de la funcion.
 - Ejercicio 3
	- Se ha realizado un consulta filtrando a los pacientes que estaban en el area de *pediatrics*.
 - Ejercicio 5
	- Se ha realizado una consulta en la que se ha insertado un campo *prioridad* que tiene las condiciones para indicar que es un paciente prioritario o no.

---

En ningun momento se modifican integramente los valores del objeto, no se hacen diferentes constructores y todo tiene los valores que se indica en la propuesta de ejercicio.

El visionado de los ejercicios solo y solo se hacen mediante consultas LINQ.

---

### Funciones

 - Ejercicio 1
	- Extraer la lista de pacientes que sean de la especialidad pediatrics y que tengan menos de 10 años.

		Consulta:

		```csharp
		var lista_consulta = from paciente in lista_pacientes
							where paciente.Specialty == "pediatrics"
							where paciente.Age < 10
							select new
							{
								nombre = paciente.Name,
								edad = paciente.Age,
								especialidad = paciente.Specialty
							};
		```

 - Ejercicio 2
	- Queremos activar el protocolo de urgencia si hay algún paciente con ritmo cardíaco mayor que 100 o temperatura mayor a 39.

		Consulta:

		```csharp
		var lista_consulta = from paciente in lista_pacientes
							 where (paciente.HeartRate > 100 || paciente. Temperature > 39)
							 select new
							 {
							 	nombre = paciente.Name,
							 	ritmo = paciente.HeartRate,
							 	temperatura = paciente.Temperature
							 };
		```
		
 - Ejercicio 3
	- No podemos atender a todos los pacientes hoy por lo que vamos a crear una nueva coleccion y reasignar a los pacientes de *pediatrics* a *general medicine*.

		Consulta:

		```csharp
		var lista_consulta = from paciente in lista_pacientes
							 where paciente.Specialty == "pediatrics"
							 select new
							 {
							 	id = paciente.Id,
							 	nombre = paciente.Name,
							 	apellido = paciente.Lastname,
							 	sexo = paciente.Sex,
							 	edad = paciente.Age,
							 	especialidad = paciente.Specialty
							 };
		```
		
 - Ejercicio 4
	- Queremos conocer de una sola consulta el numero de pacientes que estan asignado a *general medicine* y a *pediatrics*.

		Consulta:

		```csharp
		var lista_especialidad = lista_pacientes.GroupBy(p => p.Specialty);

		foreach (var especialidad in lista_especialidad)
		{
			Console.WriteLine($"\tPacientes en '{especialidad.Key}': {especialidad.Count()}\n");
		}
		```
		
 - Ejercicio 5
	- Devuelve una lista nueva que por cada paciente se indique si tiene prioridad o no. Se tendrá prioridad si el ritmo cardiaco es mayor 100 o la temperatura es mayor a 39.

		Consulta:

		```csharp
		var lista_consulta = from paciente in lista_pacientes
							 select new
							 {
							 	prioridad = (paciente.HeartRate > 100 || paciente.Temperature > 39) ? "Si" : "No",
							 	nombre = paciente.Name,
							 	ritmo = paciente.HeartRate,
							 	temperatura = paciente.Temperature
							 };
		```
		
 - Ejercicio 6
	- Queremos conocer de una sola consulta La edad media de pacientes asignados a *pediatrics* y *general medicine*.

		Consulta:

		```csharp
		var lista_especialidad = lista_pacientes.GroupBy(p => p.Specialty);

		foreach (var especialidad in lista_especialidad)
		{
			Console.WriteLine($"\tEdad media de '{especialidad.Key}': {especialidad.Average(p => p.Age)}\n");
		}
		```