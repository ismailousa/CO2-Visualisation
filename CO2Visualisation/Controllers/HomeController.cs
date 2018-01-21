using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CO2ClassLib;

namespace CO2Visualisation.Controllers
{
    public class HomeController : Controller
    {
        static CO2Sensor cO2Sensor = new CO2Sensor();
        // GET: Home
        public ActionResult Index()
        {
            cO2Sensor.refreshCO2Value();
            return View(cO2Sensor);
        }

        [HttpGet]
        public ActionResult Refresh()
        {
            return Json(cO2Sensor.refreshCO2Value(), JsonRequestBehavior.AllowGet);
        }
    }
}