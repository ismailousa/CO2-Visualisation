using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;


namespace CO2Visualisation.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/styles")
                .Include("~/content/style.css")
                );

            bundles.Add(new ScriptBundle("~/scripts")
                   .Include("~/scripts/jquery-3.2.1.js")
                   .Include("~/scripts/myscript.js")
               );
        }
    }
}