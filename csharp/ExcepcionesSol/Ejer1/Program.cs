using System;

namespace Sintaxis
{
    public class NumeroAleatorioException : Exception
    {
        public NumeroAleatorioException(string message)
        {
            Console.Write(message);
        }
    }
    public class NumeroFueraDeRango : Exception
    {
        public NumeroFueraDeRango(string message)
        {
            Console.Write(message);
        }
    }
    internal class Ejer1
    {
        static void ComprobarNumeroUsuario(int user_nbr)
        {
            if (user_nbr < 1 || user_nbr > 16)
            {
                throw new NumeroFueraDeRango("ERROR - El numero tiene que estar comprendido entre 1 y 15\n");
            }
        }

        static bool AdivinarNumero(int user_nbr, int rand_nbr, int nbr_try)
        {
            if (user_nbr == rand_nbr)
            {
                return true;
            }
            else
            {
                if (nbr_try == 0)
                {
                    throw new NumeroAleatorioException("\nERROR - Numero de intentos superado\nPrueba suerte en otro momento!\n");
                }
                else
                {
                    if (user_nbr > rand_nbr)
                    {
                        throw new NumeroAleatorioException("\nERROR - Numero inferior");
                    }
                    else
                    {
                        throw new NumeroAleatorioException("\nERROR - Numero superior");
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            Random rand= new Random();
            int random_nbr;
            int try_nbr = 10;
            int user_nbr;

            random_nbr = rand.Next(15) + 1;

            /*
            DESCOMENTAR PARA VER EL NUMERO ALEATORIO     
            Console.WriteLine(random_nbr);
             */

            while (true)
            {
                try
                {
                    Console.WriteLine("Que numero crees que es (Entre 1 y 15)?");
                    user_nbr = Convert.ToInt32(Console.ReadLine());
                    ComprobarNumeroUsuario(user_nbr);
                    if (AdivinarNumero(user_nbr, random_nbr, try_nbr))
                    {
                        Console.WriteLine("\nHas acertado!");
                        break;
                    }
                }
                catch(NumeroFueraDeRango)
                {
                    Console.WriteLine();
                }
                catch (NumeroAleatorioException)
                {
                    Console.WriteLine();
                    try_nbr--;
                    if (try_nbr < 0)
                    {
                        break;
                    }
                    else 
                    {
                        if (try_nbr == 0)
                        {
                            Console.WriteLine("No acertaste, ultimo intento!\n");
                        }
                        else
                        {
                            Console.WriteLine("No acertaste, te quedan " + try_nbr + " intentos\n");
                        }
                    }
                }
                catch (FormatException)
                {
                    Console.WriteLine("\nERROR - No has introducido ningun numero\n");
                }
                catch (ArgumentNullException)
                {
                    Console.WriteLine("\nERROR - No se ha introducido un argumento o es NULL\n");
                }
            }
        }
    }
}