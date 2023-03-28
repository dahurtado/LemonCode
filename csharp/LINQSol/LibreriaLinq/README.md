# C#04 - LINQ (Language Integrated Query) - Clase Paciente

 - [Clase Paciente](https://github.com/dahurtado/LemonCode/blob/main/csharp/LINQSol/LibreriaLinq/Paciente.cs)

---

## Anotaciones de clase

 - Las definiciones de varios atributos tienen una '?'. Esto indica que el campo puede ser <code>null</code>
	- Esta puesto asi ya que el IDE daba un peque;o Warning porque esos atributos no deberian ser <code>not null</code>. La solucion propuesta fue ponerlos con el caracter '?' por si en la declaracion del objeto no se inserta un valor, se ponga como <code>null</code>

```csharp
	namespace LibreriaLinq
	{
		public class Paciente
		{
			public int Id { get; set; }
			public string? Name { get; set; }
			public string? Lastname { get; set; }
			public string? Sex { get; set; }
			public double Temperature { get; set; }
			public double HeartRate { get; set; }
			public string? Specialty { get; set; }
			public int Age { get; set; }
		}
	}
```