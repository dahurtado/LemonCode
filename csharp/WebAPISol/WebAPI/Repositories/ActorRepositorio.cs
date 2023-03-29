using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using WebAPI.Contracts;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class ActorRepositorio : IActorRepositorio
    {
        const string JSON_PATH = @"C:\Source\LemonCodeRepo\LemonCode\csharp\WebAPISol\WebAPI\Resources\Actores.json";

        private string ReadActorsFromFile()
        {
            return File.ReadAllText(JSON_PATH);
        }

        private void UpdateActors(List<Actor> actors)
        {
            var actorsJson = JsonConvert.SerializeObject(actors, Formatting.Indented);
            File.WriteAllText(JSON_PATH, actorsJson);
        }
        
        public void CreateActor(Actor actor)
        {
            var actors = ReadActors();
            var existsActor = actors.Exists(a => a.Id == actor.Id);
            if (existsActor)
            {
                throw new Exception("Ya existe un actor con esa ID");
            }
            actors.Add(actor);
            UpdateActors(actors);
        }

        public void DeleteActor(Actor actor)
        {
            throw new System.NotImplementedException();
        }

        public Actor GetActorById(int id)
        {
            var lista_actores = ReadActors();
            var ExisteID = lista_actores.Exists(a => a.Id == id);
            if (ExisteID == false)
            {
                throw new Exception("No existe ese ID en la API");
            }
            var actorID = lista_actores.Find(a => a.Id == id);
            return (actorID);
        }

        public List<Actor> ReadActors()
        {
            try
            { 
                var actoresFromFile = ReadActorsFromFile();
                List<Actor> listaActores = JsonConvert.DeserializeObject<List<Actor>>(actoresFromFile);
                return listaActores;
            }
            catch
            {
                throw;
            }
        }

        public void UpdateActor(Actor actor)
        {
            
        }
    }
}
