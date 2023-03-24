using System;

namespace Sintaxis
{
    internal class Ejer4
    {
        static void Main(string[] args)
        {
            var nbr = Convert.ToInt32(0);
            while (nbr <= 100) 
            {
                if (nbr % 2 == 0)
                {
                    Console.WriteLine(nbr);
                }
                nbr++;
            }
        }
    }
}