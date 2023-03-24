using System;

namespace Sintaxis
{
    internal class Ejer2
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escribe un numero:");
            var nbr1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Escribe otro numero:");
            var nbr2 = Convert.ToInt32(Console.ReadLine());

            if (nbr1 > nbr2)
            {
                Console.WriteLine(nbr1 + " es mayor que " + nbr2);
            }
            else
            {
                Console.WriteLine(nbr2 + " es mayor que " + nbr1);
            }
        }
    }
}