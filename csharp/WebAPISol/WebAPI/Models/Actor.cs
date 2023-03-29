using System.Collections.Generic;

namespace WebAPI.Models
{
    public class Actor
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }    
        public List<Pelicula> Peliculas { get; set;}

    }
}
