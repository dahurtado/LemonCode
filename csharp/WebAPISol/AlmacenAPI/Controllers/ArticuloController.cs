using AlmacenAPI.Contracts;
using AlmacenAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

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
    }
}
