using System;
using LibreriaLinq;
using System.Linq;
namespace linq
{
    internal class EjerLinq
    {
        public static Paciente[] generar_lista()
        {
            var lista = new Paciente[]
            {
                new Paciente
                {
                    Id = 1,
                    Name = "John",
                    Lastname = "Doe",
                    Sex = "Male",
                    Temperature = 36.8,
                    HeartRate = 80,
                    Specialty = "general medicine",
                    Age = 44
                },
                new Paciente
                {
                    Id = 2,
                    Name = "Jane",
                    Lastname = "Doe",
                    Sex = "Female",
                    Temperature = 36.8,
                    HeartRate = 70,
                    Specialty = "general medicine",
                    Age = 43
                },
                new Paciente
                {
                    Id = 3,
                    Name = "Junior",
                    Lastname = "Doe",
                    Sex = "Male",
                    Temperature = 36.8,
                    HeartRate = 90,
                    Specialty = "pediatrics",
                    Age = 8
                },
                new Paciente
                {
                    Id = 4,
                    Name = "Mary",
                    Lastname = "Wien",
                    Sex = "Female",
                    Temperature = 36.8,
                    HeartRate = 120,
                    Specialty = "general medicine",
                    Age = 20
                },
                new Paciente
                {
                    Id = 5,
                    Name = "Scarlett",
                    Lastname = "Somez",
                    Sex = "Female",
                    Temperature = 36.8,
                    HeartRate = 110,
                    Specialty = "general medicine",
                    Age = 30
                },
                new Paciente
                {
                    Id = 6,
                    Name = "Brian",
                    Lastname = "Kid",
                    Sex = "Male",
                    Temperature = 39.8,
                    HeartRate = 80,
                    Specialty = "pediatrics",
                    Age = 11
                }
            };
            return (lista);
        }

        public static void ejercicio1(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 1 - Especialidad 'pediatrics' y menor de 10 ---\n");

            var lista_consulta =
            (
                from paciente in lista_pacientes
                where paciente.Specialty == "pediatrics"
                where paciente.Age < 10
                select new
                {
                    nombre = paciente.Name,
                    edad = paciente.Age,
                    especialidad = paciente.Specialty
                }
            );
            foreach (var paciente_consulta in lista_consulta)
            {
                Console.WriteLine(
                    $"\tNombre: {paciente_consulta.nombre}\n" +
                    $"\tEdad: {paciente_consulta.edad}\n" +
                    $"\tEspecialidad: {paciente_consulta.especialidad}\n"
                    );
            }
        }

        public static void ejercicio2(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 2 - Ritmo mayor 100 o temperatura mayor 39 ---\n");

            var lista_consulta =
            (
                from paciente in lista_pacientes
                where (paciente.HeartRate > 100 || paciente.Temperature > 39)
                select new
                {
                    nombre = paciente.Name,
                    ritmo = paciente.HeartRate,
                    temperatura = paciente.Temperature
                }
            );
            foreach (var paciente_consulta in lista_consulta)
            {
                Console.WriteLine(
                    $"\tNombre: {paciente_consulta.nombre}\n" +
                    $"\tRitmo cardiaco: {paciente_consulta.ritmo}\n" +
                    $"\tTemperatura corporal: {paciente_consulta.temperatura}\n"
                    );
            }
        }

        public static void ejercicio3(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 3 - Falta de personal ---\n");

            var lista_consulta = 
            (
                from paciente in lista_pacientes
                where paciente.Specialty == "pediatrics"
                select new
                {
                    id = paciente.Id,
                    nombre = paciente.Name,
                    apellido = paciente.Lastname,
                    sexo = paciente.Sex,
                    edad = paciente.Age,
                    especialidad = paciente.Specialty
                }
            );
            foreach (var paciente_consulta in lista_consulta)
            {
                Console.WriteLine(
                    $"\tIdentificador: {paciente_consulta.id}\n" +
                    $"\tNombre completo: {paciente_consulta.nombre} {paciente_consulta.apellido}\n" +
                    $"\tSexo: {paciente_consulta.sexo}\n" +
                    $"\tEdad: {paciente_consulta.edad}\n" +
                    $"\tTransferida: '{paciente_consulta.especialidad}' => 'general medicine'\n"
                    );
            }
        }

        public static void ejercicio4(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 4 - Numero de pacientes en 'pediatrics' y 'general medicine' ---\n");

            var lista_especialidad = lista_pacientes.GroupBy(p => p.Specialty);

            foreach (var especialidad in lista_especialidad)
            {
                Console.WriteLine($"\tPacientes en '{especialidad.Key}': {especialidad.Count()}\n");
            }
        }

        public static void ejercicio5(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 5 - Mirar si tiene prioridad (Ritmo > 100 o Temperatura > 39) ---\n");

            var lista_consulta = 
            (
                from paciente in lista_pacientes
                select new
                {
                    prioridad = (paciente.HeartRate > 100 || paciente.Temperature > 39) ? "Si" : "No",
                    nombre = paciente.Name,
                    ritmo = paciente.HeartRate,
                    temperatura = paciente.Temperature
                }
            );
            foreach (var paciente_consulta in lista_consulta)
            {
                Console.WriteLine(
                    $"\tNombre: {paciente_consulta.nombre}\n" +
                    $"\tRitmo cardiaco: {paciente_consulta.ritmo}\n" +
                    $"\tTemperatura corporal: {paciente_consulta.temperatura}\n" +
                    $"\tPrioridad: {paciente_consulta.prioridad}\n"
                    );
            }
        }

        public static void ejercicio6(Paciente[] lista_pacientes)
        {
            Console.WriteLine("\n --- Ejercicio 6 - Edad media de 'pediatrics' y 'general medicine' ---\n");

            var lista_especialidad = lista_pacientes.GroupBy(p => p.Specialty);

            foreach (var especialidad in lista_especialidad)
            {
                Console.WriteLine($"\tEdad media de '{especialidad.Key}': {especialidad.Average(p => p.Age)}\n");
            }
        }

        static void Main(string[] args)
        {
            var lista_pacientes = generar_lista();

            ejercicio1(lista_pacientes);

            ejercicio2(lista_pacientes);

            ejercicio3(lista_pacientes);

            ejercicio4(lista_pacientes);

            ejercicio5(lista_pacientes);

            ejercicio6(lista_pacientes);

        }
    }
}