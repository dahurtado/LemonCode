using System.Runtime.CompilerServices;

namespace LibreriaPoo
{
    public class Tragaperra
    {
        public int Monedas { get; set; }
        Random rand = new Random();

        public Tragaperra() 
        {
            Monedas = rand.Next(776) + 1;
        }
        

        public bool Play()
        {
            Monedas++;
            int i = 0;
            int random_boolean = 0;
            while (i < 3)
            {
                random_boolean += rand.Next(2);
                i++;
            }
            // Console.WriteLine("\n" + random_boolean + "\n");  DESCOMENTAR PARA VER CUAN CERCA TE QUEDAS DE SACAR EL PREMIO
            if (random_boolean == 3)
                return (true);
            return (false);
        }
    }
}