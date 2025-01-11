namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public DateTime DateOfCreation { get; set; }
        public string Notes { get; set;}
    }
}