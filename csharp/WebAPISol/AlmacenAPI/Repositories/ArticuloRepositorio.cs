using AlmacenAPI.Contracts;
using AlmacenAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

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
        public void CreateArticulo(ArticuloInsertar art)
        {
            Articulo art_completo = new Articulo();
            var articulos = ReadArticulos();
            var contar_articulos = articulos.Count() + 1;

            art_completo.Id = contar_articulos;
            art_completo.Nombre = art.Nombre;
            art_completo.Descripcion = art.Descripcion;
            art_completo.FechaEntrada = DateTime.Now.ToString("dd/MM/yyyy HH:mm");
            if (art.Cantidad < 0)
            {
                throw new Exception("No se pueden introducir cantidades negativas");
            }
            else
            {
                art_completo.Cantidad = art.Cantidad;
            }

            CreateArticulo(art_completo);

        }

        public void DeleteArticulo(int id)
        {
            var lista_articulos = ReadArticulos();

            foreach (var a in lista_articulos)
            {
                if (a.Id == id)
                {
                    lista_articulos.Remove(a);
                    break;
                }
            }
            UpdateArticulos(lista_articulos);
        }

        public Articulo ReadArticuloById(int id)
        {
            var lista_articulos = ReadArticulos();
            var exiteID = lista_articulos.Exists(a => a.Id == id);
            if (exiteID == false)
            {
                throw new Exception("No existe ese ID en la base de datos");
            }
            return (lista_articulos.Find(a => a.Id == id));
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

        public void UpdateArticulo(int id, int cantidad)
        {
            if (cantidad == 0)
                throw new Exception("No se puede insertar una cantidad igual a 0");
            var lista_articulos = ReadArticulos();

            ReadArticuloById(id);

            foreach (var a in lista_articulos)
            {
                if (a.Id == id)
                {
                    if (cantidad < 0)
                    {
                        if (cantidad + a.Cantidad < 0)
                        {
                            throw new Exception("No se puedo realizar la retirada del producto debido a que no se pueden dejar valores negativos");
                        }
                        else
                        {
                            a.Cantidad = cantidad + a.Cantidad;
                        }
                    }
                    else
                    {
                        a.Cantidad += cantidad;
                    }
                }
            }
            UpdateArticulos(lista_articulos);
        }
    }
}
