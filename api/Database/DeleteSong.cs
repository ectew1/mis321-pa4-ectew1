using MySql.Data.MySqlClient;
using System;
using api.Interfaces;
using api.Models;

namespace api.Database
{
    public class DeleteSong : IDeleteSongs
    {
        public void Delete(Song song)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            //prepared statements to prevent sql injections
            string stm = @"DELETE from songs WHERE Title = @songTitle";
            using var cmd = new MySqlCommand(stm, con);

            //now identifying what those @ really mean
            cmd.Parameters.AddWithValue("@songTitle", song.SongTitle);
            
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}