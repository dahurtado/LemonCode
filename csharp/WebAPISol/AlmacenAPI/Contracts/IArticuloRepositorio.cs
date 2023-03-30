using AlmacenAPI.Models;
using System.Collections.Generic;
namespace AlmacenAPI.Contracts
{
    public interface IArticuloRepositorio
    {
        void CreateArticulo(Articulo articulo);
        Articulo CreateArticulo(ArticuloInsertar art);
        List<Articulo> ReadArticulos();
        Articulo ReadArticuloById(int id);
        void UpdateArticulo(Articulo articulo);
        void DeleteArticulo(int id);
    }
}
