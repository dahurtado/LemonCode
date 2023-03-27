using System;
using LibreriaPoo;

namespace Sintaxis
{
    public class NumeroFueraDeMenuException : Exception
    {
        public NumeroFueraDeMenuException(string message)
        {
            Console.WriteLine(message);
        }
    }
    
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\n\t\t --- Bienvenido a las tagraperras! ---\n");
            int menu = 1;
            Tragaperra maquina = new Tragaperra();
            while (menu != 0)
            {
                try
                {
                    Console.WriteLine("1 - Jugar\n0 - Salir");
                    menu = Convert.ToInt32(Console.ReadLine());
                    if (menu < 0 || menu > 1)
                    {
                        throw new NumeroFueraDeMenuException("\nERROR - Opcion no disponible en el menu\n");
                    }
                    else
                    {
                        switch (menu)
                        {
                            case 1:
                                if (maquina.Play() == true)
                                {
                                    Console.WriteLine("\nFelicidades!! Has ganado " + maquina.Monedas + " monedas!\n");
                                    menu = 0;
                                }
                                else
                                {
                                    Console.WriteLine("\nAy amigo casi, siga intentandolo!!\n");
                                }
                                break;
                            case 0:
                                break;
                        }
                    }
                }
                catch (FormatException)
                {
                    Console.WriteLine("\nERROR - Numero no introducido\n");
                    menu = 1;
                }
                catch (NumeroFueraDeMenuException)
                {
                    menu = 1;
                }
            }
        }
    }
}