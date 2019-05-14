using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using GoogleChart.Models;

namespace GoogleChart.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

       
        [Route("api/v1/columnchart")]
        public IActionResult GetChartData()
        {
            var sales = GetSaleCategories();

            var chartData = new object[sales.Count + 1];

            chartData[0] = new object[]{"Category","Amount" };

            int j = 0;
            for (int ii = 0; ii < sales.Count; ii++)
            {
                SaleCategory i = sales[ii];
                j++;
                chartData[j] = new object[]
                {
                    i.Category,
                    i.Amount
                };
            }
            return new JsonResult(chartData);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private List<SaleCategory> GetSaleCategories()
        {
            var saleCategories = new List<SaleCategory>()
               {
                 new SaleCategory(){Id=1, Category="Sony", Amount=45000},
                 new SaleCategory(){Id=2, Category="Nokia", Amount=32000},
                 new SaleCategory(){Id=3, Category="Vaio", Amount=51000},
                 new SaleCategory(){Id=4, Category="SamSum", Amount=44000},
                 new SaleCategory(){Id=5, Category="Toshiba", Amount=63000},
                
               };
            return saleCategories;
        }
    }
}
