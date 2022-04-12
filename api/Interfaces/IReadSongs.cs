using System.Collections.Generic;
using api.Models;

namespace api.Interfaces
{
    public interface IReadSongs
    {
       List<Song> Get();
         
    }
}