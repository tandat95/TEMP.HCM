﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEMP.HCM.Library.Model
{
    public class HcmShape
    {
        public string Level { get; set; }
        public List<List<double>> Coors { get; set; }
        public string Type { get; set; }
        public string Id { get; set; }
    }
}
