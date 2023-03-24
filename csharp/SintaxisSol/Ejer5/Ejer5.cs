using System;

namespace Sintaxis
{
    internal class Ejer5
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escribe un numero:");
            var user_nbr = Convert.ToInt32(Console.ReadLine());
            int[] nbrs = new int[user_nbr];
            int i = 0;
            int iter = 0;
            Random rand = new Random();
            while (i < user_nbr)
            {
                nbrs[i] = rand.Next(500);
                iter = i + 1;
                Console.WriteLine("Numero " + (iter) + ": " + nbrs[i]);
                i++;
            }

        }
    }
}