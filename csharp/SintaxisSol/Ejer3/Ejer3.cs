using System;

namespace Sintaxis
{
    internal class Ejer3
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Que dia de la semana es?");
            var day = Console.ReadLine();

            if (day == "sabado" || day == "domingo")
            {
                Console.WriteLine("Es fin de semana!");
            }
            else
            {
                Console.WriteLine("Te has equivocado de dia, porque ese dia no esta en el fin de semana :(");
            }
            
        }
    }
}