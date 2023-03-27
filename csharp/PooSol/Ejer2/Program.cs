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
            int menu_de_juego = 1;
            var menu_de_programa = "1";
            while (true)
            {
                try
                {
                    Console.WriteLine("\n\t\t --- Bienvenido a las tagraperras! ---\n");
                    Tragaperra maquina = new Tragaperra();
                    while (menu_de_juego != 0)
                    {
                        Console.WriteLine("1 - Jugar\n0 - Salir");
                        menu_de_juego = Convert.ToInt32(Console.ReadLine());
                        if (menu_de_juego < 0 || menu_de_juego > 1)
                        {
                            throw new NumeroFueraDeMenuException("\nERROR - Opcion no disponible en el menu\n");
                        }
                        else
                        {
                            switch (menu_de_juego)
                            {
                                case 1:
                                    if (maquina.Play() == true)
                                    {
                                        Console.WriteLine("\nFelicidades!! Has ganado " + maquina.Monedas + " monedas!\n");
                                        menu_de_juego = 0;
                                    }
                                    else
                                    {
                                        Console.WriteLine("\nAy amigo casi, siga intentandolo!!\n");
                                    }
                                    break;
                                case 0:
                                    Console.WriteLine("\nEs una pena que te vayas!\nVuelve pronto!!\n");
                                    menu_de_programa = "0";
                                    menu_de_juego = 0;
                                    break;
                            }
                        }
                    }
                    if (menu_de_programa == "1")
                    {
                        Console.WriteLine("Quieres volver a intentarlo?\nCualquier tecla - Continuar\n0 - Salir");
                        menu_de_programa = Console.ReadLine();
                        menu_de_juego = 1;
                    }
                    else
                    {
                        break;
                    }
                }
                catch (FormatException)

                {
                    Console.WriteLine("\nERROR - Numero no introducido\n");
                    menu_de_juego = 1;
                }
                catch (NumeroFueraDeMenuException)
                {
                    menu_de_juego = 1;
                }
            }
        }
    }
}