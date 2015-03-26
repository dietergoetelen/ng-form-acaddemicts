using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ngFormAcaddemicts.MVC.App_Start
{
    public class BundleConfig
    {
        public const string Angular = "~/angular/full-angular";
        public const string App = "~/angular/app";
        public const string Bootstrap = "~/css/bootstrap";

        public static void RegisterBundles(BundleCollection bundles)
        {
            //BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle(Angular).Include("~/Scripts/angular.js"));
            bundles.Add(new ScriptBundle(App).Include("~/app/app.module.js").IncludeDirectory("~/app", "*.js", true));

            bundles.Add(new StyleBundle(Bootstrap).Include("~/Content/bootstrap.css"));
        }

    }
}