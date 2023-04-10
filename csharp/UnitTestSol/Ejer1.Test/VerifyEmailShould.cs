using Ejer1.Console;
using NuGet.Frameworks;

namespace Ejer1.Test
{
    [TestClass]
    public class VerifyEmailShould
    {
        [TestMethod]
        public void False_If_Email_Not_Valid()
        {
            //Arrange
            var email_verify = new Email();

            //  var user_email1 = "daniel@gmail.com";
            //  var user_email2 = "daniel";
            var user_email3 = "daniel@gmail";
            //Act
            var verify = email_verify.VerifyEmail(user_email3);
            //Assertepic
            Assert.AreEqual(verify, true);
        }
    }
}