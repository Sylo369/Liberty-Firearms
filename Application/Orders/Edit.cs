using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Order Order { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
              var order = await _context.Orders.FindAsync(request.Order.Id);

              _mapper.Map(request.Order, order);
                
              await _context.SaveChangesAsync();
            }
        }
    }
}