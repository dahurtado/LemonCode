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

        //TO DO
        [HttpPut("{id}")]
        public ActionResult<Actor> UpdateActor(int id)
        {
            try
            {
                var actor_update = _actorRepositorio.GetActorById(id);
                return (actor_update);
            }
            catch (Exception ex)
            {
                throw;
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
