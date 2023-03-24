using System;

namespace Sintaxis
{
    internal class Ejer6
    {
        static void Main(string[] args)
        {
            Console.WriteLine("De que altura quiere la piramide?");
            int nbr = Convert.ToInt32(Console.ReadLine());
            string piramid;
            int i = 0;
            int j = 0;
            while (i < nbr)
            {
                j = 0;
                piramid = "";
                while (j <= i)
                {
                    if (i == nbr - 1)
                    {
                        piramid += "*";
                    }
                    else
                    {
                        if (j == 0 || j == i)
                        {
                            piramid += "*";
                        }
                        else
                        {
                            piramid += " ";
                        }
                    }
                    j++;
                }
                Console.WriteLine(piramid);
                i++;
            }
        }
    }
}