// using PA3.Interfaces;
// using PA3.Models;
using MySql.Data.MySqlClient;
using api.Interfaces;
using api.Models;

namespace api.Database
{
    public class CreateSong : ICreateSongs
    {
        public void Create(Song song)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO songs(Title, Timestamp, Deleted, Favorited) VALUES(@SongTitle, @SongTimestamp, @Deleted, @Favorited)";
            using var cmd = new MySqlCommand(stm, con);

            //cmd.Parameters.AddWithValue("@SongID", song.SongID);
            cmd.Parameters.AddWithValue("@SongTitle", song.SongTitle);
            cmd.Parameters.AddWithValue("@SongTimestamp", song.SongTimestamp);
            cmd.Parameters.AddWithValue("@Deleted", song.Deleted);
            cmd.Parameters.AddWithValue("@Favorited", song.Favorited);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}