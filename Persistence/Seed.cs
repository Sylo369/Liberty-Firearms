using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Orders.Any()) return;

            var activities = new List<Order>
            {

              new Order
            {
        Id = Guid.NewGuid(),
        Address = "123 Market Street, Springfield, USA",
        DateOfCreation = new DateTime(2023, 2, 10, 14, 30, 0),
        Notes = "First-time customer order."
    },
    new Order
    {
        Id = Guid.NewGuid(),
        Address = "456 Oak Drive, Shelbyville, USA",
        DateOfCreation = new DateTime(2023, 7, 5, 9, 0, 0),
        Notes = "Urgent delivery requested."
    },
    new Order
    {
        Id = Guid.NewGuid(),
        Address = "789 Pine Avenue, Ogdenville, USA",
        DateOfCreation = new DateTime(2024, 1, 20, 16, 45, 0),
        Notes = "Gift order with special packaging."
    },
    new Order
    {
        Id = Guid.NewGuid(),
        Address = "101 Birch Lane, North Haverbrook, USA",
        DateOfCreation = DateTime.Now.AddDays(-30),
        Notes = "Recurring order for a regular customer."
    },
    new Order
    {
        Id = Guid.NewGuid(),
        Address = "202 Cedar Road, Brockway, USA",
        DateOfCreation = DateTime.Now,
        Notes = "Bulk order for corporate event."
    }
};
            await context.Orders.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}