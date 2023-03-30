using AlmacenAPI.Contracts;
using AlmacenAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AlmacenAPI.Repositories
{
    public class ArticuloRepositorio : IArticuloRepositorio
    {
        const string JSON_PATH = @"C:\Source\LemonCodeRepo\LemonCode\csharp\WebAPISol\AlmacenAPI\Resources\Articulo.json";

        private string ReadArticulosFromFile()
        {
            var json = File.ReadAllText(JSON_PATH);
            return json;
        }

        public void CreateArticulo(Articulo art)
        {
            var articulos = ReadArticulos();
            articulos.Add(art);
            UpdateArticulos(articulos);
        }
        public Articulo CreateArticulo(ArticuloInsertar art)
        {
            Articulo art_completo = new Articulo();
            var articulos = ReadArticulos();
            var contar_articulos = articulos.Count() + 1;

            art_completo.Id = contar_articulos;
            art_completo.Nombre = art.Nombre;
            art_completo.Descripcion = art.Descripcion;
            art_completo.FechaEntrada = DateTime.Now.ToString("dd/MM/yyyy");
            if (art.Cantidad < 0)
            {
                throw new Exception("No se pueden introducir cantidades negativas");
            }
            else
            {
                art_completo.Cantidad = art.Cantidad;
            }

            return (art_completo);

        }

        public void DeleteArticulo(int id)
        {
            throw new System.NotImplementedException();
        }

        public Articulo ReadArticuloById(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Articulo> ReadArticulos()
        {
            try
            {
                var articulosFromFile = ReadArticulosFromFile();
                List<Articulo> articulos = JsonConvert.DeserializeObject<List<Articulo>>(articulosFromFile);
                return articulos;
            }
            catch
            {
                throw;
            }
        }

        public void UpdateArticulos(List<Articulo> articulos)
        {
            var articulosJson = JsonConvert.SerializeObject(articulos, Formatting.Indented);
            File.WriteAllText(JSON_PATH, articulosJson);
        }

        public void UpdateArticulo(Articulo articulo)
        {
            throw new System.NotImplementedException();
        }
    }
}
