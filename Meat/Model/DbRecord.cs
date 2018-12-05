using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Meat.Model
{
    public class DbRecord
    {
        [JsonProperty("id")]
        public virtual int ID { get; protected set; }

        [JsonProperty("time")]
        public virtual DateTime Time { get; protected set; }

        [JsonProperty("text")]
        public virtual string Text { get; protected set; }

        public DbRecord()
        {
        }

        public DbRecord(DateTime time, string text)
        {
            Time = time;
            Text = text;
        }
    }
}
