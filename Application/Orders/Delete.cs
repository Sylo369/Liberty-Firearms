using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        public DataContext _context { get; }
            public Handler(DataContext context)
            {
            _context = context;

            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var order = await _context.Orders.FindAsync(request.Id);

                _context.Remove(order);
                await _context.SaveChangesAsync();
            }
        }


    }
}