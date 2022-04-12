using api.Models;

namespace api.Interfaces
{
    public interface IReadOneSong
    {
        Song Get(int id);
    }
}