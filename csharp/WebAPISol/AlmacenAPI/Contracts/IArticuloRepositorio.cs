using AlmacenAPI.Models;
using System.Collections.Generic;
namespace AlmacenAPI.Contracts
{
    public interface IArticuloRepositorio
    {
        void CreateArticulo(Articulo articulo);
        void CreateArticulo(ArticuloInsertar art);
        List<Articulo> ReadArticulos();
        Articulo ReadArticuloById(int id);
        void UpdateArticulo(int id, int cantidad);
        void DeleteArticulo(int id);
    }
}
