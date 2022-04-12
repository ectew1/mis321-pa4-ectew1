using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Cache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Database;
using api.Models;
using api.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongController : ControllerBase
    {
        [EnableCors("AnotherPolicy")]
        [HttpGet(Name = "GetSongs")]
        
        public List<Song> Get()
        {
            IReadSongs songs = new ReadSong();
            return songs.Get();
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}", Name="GetSong")]
        public Song Get(int id)
        {
            IReadOneSong song = new ReadSong();
            return song.Get(id);
        }

        [EnableCors("AnotherPolicy")]
        [HttpPost(Name="PostSong")]
        public void Post([FromBody] Song s)
        {
            ICreateSongs song = new CreateSong();
            song.Create(s);
        }

        [EnableCors("AnotherPolicy")]
        [HttpPut]
        public void Put([FromBody] Song s)
        {
            IUpdateSongs song = new UpdateSong();
            song.Update(s);
        }

        [EnableCors("AnotherPolicy")]
        [HttpDelete]
        public void Delete([FromBody] Song s)
        {
            IDeleteSongs song = new DeleteSong();
            song.Delete(s);
        }
    }
}
