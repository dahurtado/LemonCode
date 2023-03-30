using WebAPI.Models;
using System.Collections.Generic;

namespace WebAPI.Contracts
{
    public interface IActorRepositorio
    {
        Actor GetActorById(int id);

        void CreateActor(Actor actor);
        List<Actor> ReadActors();
        void DeleteActor(Actor actor);
        void UpdateActor(Actor actor);
    }
}
