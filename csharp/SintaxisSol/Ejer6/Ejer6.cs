using System;

namespace Sintaxis
{
    internal class Ejer6
    {
        static void Main(string[] args)
        {
            string piramid;
            int i = 0;
            int j;
            int nbr;
            var c = "";

            Console.WriteLine("De que altura quiere la piramide?");
            nbr = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Que caracter quiere imprimir?");
            c = Console.ReadLine();
            while (c == "")
            {
                Console.WriteLine("ERROR - Caracter no introducido\nQue caracter quiere imprimir?");
                c = Console.ReadLine();
            }
            while (i < nbr)
            {
                j = 0;
                piramid = "";
                while (j <= i)
                {
                    if (i == nbr - 1)
                    {
                        piramid += c[0];
                    }
                    else
                    {
                        if (j == 0 || j == i)
                        {
                            piramid += c[0];
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