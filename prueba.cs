public interface IBookService
{
    string GetISBNFor(string bookTitle);
    IEnumerable<string> GetBooksForCategory(string categoryId);
}


public interface IEmailSender
{
    public void SendEmail(string to, string subject, string body);
}


public class AccountService
{
    private IBookService _bookService;
    private IEmailSender _emailSender;

    public AccountService(IBookService bookService, IEmailSender emailSender)
    {
        _bookService = bookService;
        _emailSender = emailSender;
    }

    public IEnumerable<string> GetAllBooksForCategory(string categoryId)
    {
        var allBooks = _bookService.GetBooksForCategory(categoryId);
        return allBooks;
    }

    public string GetBookISBN(string categoryId, string searchTerm)
    {
        var allBooks = _bookService.GetBooksForCategory(categoryId);
        var foundBook = allBooks
                        .Where(x => x.ToUpper().Contains(searchTerm.ToUpper()))
                        .FirstOrDefault();
        if (foundBook == null)
        {
            return string.Empty;
        }
        return _bookService.GetISBNFor(foundBook);
    }

    public void SendEmail(string emailAddress, string bookTitle)
    {
        string subject = "Awesome Book";
        string body = $"Hi,\n\nThis book is awesome: {bookTitle}.\nCheck it out.";
        _emailSender.SendEmail(emailAddress, subject, body);
    }
}