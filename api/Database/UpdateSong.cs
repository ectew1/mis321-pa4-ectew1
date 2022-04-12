// using PA3.Interfaces;
// using PA3.Models;
using MySql.Data.MySqlClient;
using System;
using api.Interfaces;
using api.Models;

namespace api.Database
{
    public class UpdateSong : IUpdateSongs
    {
        public void Update(Song song)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE songs SET Favorited = @Favorited WHERE Title = @SongTitle";
            using var cmd = new MySqlCommand(stm, con);

            //now identifying what those @ really mean
            cmd.Parameters.AddWithValue("@SongTitle", song.SongTitle);
            cmd.Parameters.AddWithValue("@Favorited", 'y');

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}