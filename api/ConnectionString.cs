namespace api
{
    public class ConnectionString
    {
        public string cs {get;set;}

        public ConnectionString()
        {
            string server = "m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "r60qkdz8fys9d1zw";
            string port = "3306";
            string userName = "pwro6smvy6mmfw4l";
            string password = "i0f60lqvxtr07fo6";

            cs = $@"server = {server};user = {userName};database = {database};port = {port};password = {password};";
        }
    }
}