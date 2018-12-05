using System.Reflection;
using NHibernate.Cfg;
using NHibernate.Connection;
using NHibernate.Dialect;
using NHibernate.Driver;

namespace Meat.Model
{
    public static class Database
    {
        static Database()
        {
            Configuration.DataBaseIntegration(props =>
            {
                props.ConnectionString = "Server=localhost; Database=meat; User ID=root; Password=2147483647;";

                props.Driver<MySqlDataDriver>();
                props.Dialect<MySQL57Dialect>();
                props.ConnectionProvider<DriverConnectionProvider>();
                
                props.LogSqlInConsole = true;
            });

            Configuration.AddAssembly(Assembly.GetExecutingAssembly());
        }


        public static Configuration Configuration { get; } = new Configuration();
    }
}