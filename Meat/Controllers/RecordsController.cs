using System;
using Meat.Model;
using Microsoft.AspNetCore.Mvc;

namespace Meat.Controllers
{
    [ApiController]
    public class RecordsController : ControllerBase
    {
        [HttpGet]
        [Route("~/api/records")]
        public JsonResult GetRecords()
        {
            using (var factory = Database.Configuration.BuildSessionFactory())
            using (var session = factory.OpenSession())
            using (var transaction = session.BeginTransaction())
            {
                var records = session.CreateCriteria<DbRecord>().List<DbRecord>();
                transaction.Commit();
                return new JsonResult(records);
            }
        }

        [HttpPost]
        [Route("~/api/records/add")]
        public void AddRecord([FromBody] string value)
        {
            var record = new DbRecord(DateTime.Now, value);

            using (var factory = Database.Configuration.BuildSessionFactory())
            using (var session = factory.OpenSession())
            using (var transaction = session.BeginTransaction())
            {
                session.Save(record);
                transaction.Commit();
            }
        }

        [HttpPost]
        [Route("~/api/records/remove")]
        public void RemoveRecord([FromBody] int id)
        {
            using (var factory = Database.Configuration.BuildSessionFactory())
            using (var session = factory.OpenSession())
            using (var transaction = session.BeginTransaction())
            {
                var record = session.Load<DbRecord>(id);
                session.Delete(record);
                transaction.Commit();
            }
        }
    }
}
