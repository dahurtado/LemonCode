using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejer1.Console
{
    public interface IEmailActual
    {
        string ReturnEmail();
    }
    public class EmailActual : IEmailActual
    { 
        public string ReturnEmail()
        {
            throw new NotImplementedException();
        }
    }
}
