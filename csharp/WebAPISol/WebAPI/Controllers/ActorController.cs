using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebAPI.Models;
using WebAPI.Contracts;
using System;
using System.Numerics;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Runtime.CompilerServices;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly IActorRepositorio _actorRepositorio;
        public ActorController(IActorRepositorio actorRepositorio)
        {
            _actorRepositorio = actorRepositorio;
        }

        [HttpGet]
        public ActionResult<List<Actor>> GetAll()
        {
            return _actorRepositorio.ReadActors();
        }

        [HttpGet("{id}")]
        public ActionResult<Actor> ReadActorByID(int id)
        {
            try
            {
                return (_actorRepositorio.GetActorById(id: id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        public ActionResult UpdateActor(Actor act)
        {
            try
            {
                _actorRepositorio.UpdateActor(act);
                return Ok();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteActor(int id)
        {
            try
            {
                var actor_borrar = _actorRepositorio.GetActorById(id);
                _actorRepositorio.DeleteActor(actor_borrar);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult CreateActor(Actor actor)
        {
            try
            { 
                _actorRepositorio.CreateActor(actor);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
