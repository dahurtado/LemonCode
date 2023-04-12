# C#06 - Testing - Ejer1.Test

## [VerifyEmailShould.cs](https://github.com/dahurtado/LemonCode/blob/main/csharp/UnitTestSol/Ejer1.Test/VerifyEmailShould.cs)

En este archivo se encuentran los test que prueban las funciones del objeto Email.

Las pruebas son las siguientes:

- Test Unitarios:
	```csharp
		[TestMethod]
		public void Email_valid_Returning_True()
		{
			//Comrpueba la entrada de un email valido
		}

		[TestMethod]
		public void Email_invalid_Returning_True()
		{
			//Comproba la entrada de un email invalido
		}
	```
- Moq
	```csharp
		[TestMethod]
        public void Invalid_Email_Inserting_List()
        {
            //Comprueba la entrada de un email invalido al insertar en la lista de emails
        }

		[TestMethod]
        public void Valid_New_Email_Inserting_List()
        {
			//Comprueba la entrada de un email valido al insertar en la lista de emails
        }

		[TestMethod]
        public void Valid_Email_Inserted_Two_Times()
        {
            //Comprueba el resultado al insertar dos emails repetidos
        }

		[TestMethod]
        public void Differents_Valid_Emails_Inserted_in_List()
        {
            //Comprueba el resultado al insertar dos emails diferentes
        }
	```