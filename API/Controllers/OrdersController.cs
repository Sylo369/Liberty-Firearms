using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    
    public class OrdersController : BaseApiController
    {    
        [HttpGet] //api/orders
        public async Task<ActionResult<List<Order>>> GetOrders()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/orders/*place id here*
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(Order order)
        {
            await Mediator.Send(new Create.Command {Order = order});

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditOrder(Guid id, Order order)
        {
            order.Id = id;

            await Mediator.Send(new Edit.Command{Order = order});

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(Guid id)
        {
            await Mediator.Send(new Delete.Command {Id = id});

            return Ok();
        }

    }
}