using System;
using static System.Reflection.Metadata.BlobBuilder;

namespace Sintaxis
{
    public class Book 
    {
        public string Title { get; set; }
        public bool IsRead { get; set; }

        public Book()
        {
            Title = "1984";
            IsRead = true;
        }
        public Book(string title, bool isRead)
        {
            Title = title;
            IsRead = isRead;
        }

    }
    public class TituloErroneoException : Exception
    {
        public TituloErroneoException(string message) 
        {
            Console.WriteLine(message);
        }
    }
    internal class Program
    {
        public static bool titleExists(Book[] books, string titleToSearch)
        {
            foreach (Book book in books)
            {
                if (book.Title == titleToSearch)
                    return (true);
            }
            return (false);
        }

        public static bool IsBookRead(Book[] books, string titleToSearch)
        {
            if (titleExists(books, titleToSearch) == true)
            {
                foreach (Book book in books)
                {
                    if (book.Title == titleToSearch)
                    {
                        return (book.IsRead);
                    }
                }
                return (false);
            }
            else
            {
                throw new TituloErroneoException("\nERROR - El libro " + titleToSearch + " no existe en la base de datos");
            }
        }

        static void Main(string[] argss)
        {
            Book[] books =
            {
                new Book
                {
                    Title = "Harry Potter y la camara secreta",
                    IsRead = true,
                },
                new Book
                {
                    Title = "Los juegos del hambre",
                    IsRead = false
                },
                new Book()
            };
            string[] titles = {
                "Harry Potter y la camara secreta", 
                "Harry Potter y la piedra filosofal",
                "Los juegos del hambre" , 
                "1984" 
            };

            int i = 0;
            while ( i < titles.Length)
            {
                try
                {
                    if (IsBookRead(books, titles[i]) == true)
                    {
                        Console.WriteLine("\nSi has leido el libro: " + titles[i]);
                    }
                    else
                    {
                        Console.WriteLine("\nNo has leido el libro: " + titles[i]);
                    }
                    i++;
                }
                catch (TituloErroneoException)
                {
                    i++;
                }
            }
        }
    }
}