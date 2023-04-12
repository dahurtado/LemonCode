using Ejer1.Console;
using Moq;
using NuGet.Frameworks;

namespace Ejer1.Test
{
    [TestClass]
    public class VerifyEmailShould
    {
        [TestMethod]
        public void Email_valid_Returning_True()
        {
            //Arrange
            var email_verify = new Email();
            var user_email = "daniel@gmail.com";

            //Act
            var verify = email_verify.VerifyEmail(user_email);

            //Assertepic
            Assert.AreEqual(verify, true);
        }

        [TestMethod]
        public void Email_invalid_Returning_True()
        {
            //Arrange
            var email_verify = new Email();
            var user_email = "daniel@gmail";
            //Act
            var verify = email_verify.VerifyEmail(user_email);
            //Assertepic
            Assert.AreEqual(verify, true);
        }

        [TestMethod]
        public void Invalid_Email_Inserting_List()
        {
            //Arrange
            var email_prueba = "daniel";
            var verificarMock = new Mock<Email>();

            //Act
            var comparacion = verificarMock.Object.aniadir_email(email_prueba);

            //Assert
            Assert.AreEqual(comparacion, true);
        }

        [TestMethod]
        public void Valid_New_Email_Inserting_List()
        {
            //Arrange
            var email_prueba = "daniel@gmail.com";
            var verificarMock = new Mock<Email>();

            //Act
            var comparacion = verificarMock.Object.aniadir_email(email_prueba);

            //Assert
            Assert.AreEqual(comparacion, true);
        }

        [TestMethod]
        public void Valid_Email_Inserted_Two_Times()
        {
            //Arrange
            var email_prueba = "daniel@gmail.com";
            var verificarMock = new Mock<Email>();

            //Act
            verificarMock.Object.aniadir_email(email_prueba);
            var comparacion = verificarMock.Object.aniadir_email(email_prueba);

            //Assert
            Assert.AreEqual(comparacion, true);
        }

        [TestMethod]
        public void Differents_Valid_Emails_Inserted_in_List()
        {
            //Arrange
            var email_prueba1 = "daniel@gmail.com";
            var email_prueba2 = "paloma@gmail.com";
            var verificarMock = new Mock<Email>();

            //Act
            verificarMock.Object.aniadir_email(email_prueba1);
            var comparacion = verificarMock.Object.aniadir_email(email_prueba2);

            //Assert
            Assert.AreEqual(comparacion, true);
        }
    }
}