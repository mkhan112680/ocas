using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WellBeings_WebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            
            var messageSent = false;
            
            if (Session["MESSAGESENT"] != null)
               messageSent = Session["MESSAGESENT"].ToString() == "1";
            
            return View(messageSent);
        }

        public ActionResult Products()
        {
            ViewBag.Message = "Your Products page.";

            return View();
        }

        public ActionResult Retailers()
        {
            ViewBag.Message = "Your Retailers page.";

            return View();
        }

        public ActionResult SendMessage(string message)
        {
            bool messageSent = false;
            
            Session["MESSAGESENT"] = "1";
            messageSent = Session["MESSAGESENT"].ToString() == "1";
            
            return Json(new {MessageSent = messageSent }, JsonRequestBehavior.AllowGet);
        }
    }
}