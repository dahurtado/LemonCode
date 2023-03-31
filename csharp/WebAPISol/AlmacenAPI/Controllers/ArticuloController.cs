using AlmacenAPI.Contracts;
using AlmacenAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace AlmacenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloController : ControllerBase
    {
        private readonly IArticuloRepositorio _articuloRepositorio;

        public ArticuloController(IArticuloRepositorio articuloRepositorio)
        {
            _articuloRepositorio = articuloRepositorio;
        }

        [HttpPost]
        public ActionResult CrearArticulo(ArticuloInsertar art)
        {
            try
            {
                _articuloRepositorio.CreateArticulo(art);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public ActionResult<List<Articulo>> ReadArticulos()
        {
            return _articuloRepositorio.ReadArticulos();
        }

        [HttpGet("{id}")]
        public ActionResult<Articulo> ReadArticulo(int id)
        {
            try
            {
                return _articuloRepositorio.ReadArticuloById(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateArticuloCantidad(int id, int cantidad)
        {
            try
            {
                _articuloRepositorio.UpdateArticulo(id, cantidad);
                return Ok();
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("ID") == true)
                {
                    return NotFound(ex.Message);
                }
                else
                {
                    return BadRequest(ex.Message);
                }
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteArticulo(int id)
        {
            try
            {
                _articuloRepositorio.DeleteArticulo(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            return Ok();
        }

    }
}
