using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CO2ClassLib
{
    public class CO2Sensor
    {
        static Random rand = new Random();
        public int value { get; set; }

        public CO2Sensor()
        {
            refreshCO2Value();
        }

        public int refreshCO2Value()
        {
            value = rand.Next(350, 5000);
            return value;
        }
    }
}
