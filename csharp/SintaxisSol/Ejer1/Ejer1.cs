using System;

namespace Sintaxis
{
    internal class Ejer1
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Cual es tu nombre?");
            var name = Console.ReadLine();

            Console.WriteLine("\nCual es tu edad?");
            var age = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("\nDe donde eres?");
            var city = Console.ReadLine();

            Console.WriteLine("\nTe llamas " + name + ", tienes " + age + ". Bienvenido a " + city);
        }
    }
}