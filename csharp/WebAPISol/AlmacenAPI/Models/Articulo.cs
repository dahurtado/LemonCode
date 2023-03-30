﻿using System.Data;

namespace AlmacenAPI.Models
{
    public class Articulo
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string FechaEntrada { get; set; }
        public int Cantidad { get; set; }
    }
    public class ArticuloInsertar
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int Cantidad { get; set; }
    }
}
