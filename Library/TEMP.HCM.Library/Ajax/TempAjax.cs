using AjaxPro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEMP.HCM.Library.Model;
using TEMP.HCM.Library.Provider;

namespace TEMP.HCM.Library.Ajax
{
    public class TempAjax
    {
        [AjaxMethod]
        public void InsertTemp()
        {
            MongoProvider.InsertData();
        }
        [AjaxMethod]
        public List<HcmTemp> ImportData()
        {
            return MongoProvider.ImportData();
        }
    }
}
