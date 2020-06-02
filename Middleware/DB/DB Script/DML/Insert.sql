USE [MakeYourLifeBliss]
GO

INSERT INTO [dbo].[User]
           ([UserName]
           ,[Gender]
           ,[DateOfBirth]
           ,[PlaceOfBirth]
           ,[Email]
           ,[MobileNo]
           ,[Password]
           ,[status])
     VALUES
           ('admin'
           ,'m'
           ,getdate()
           ,'Madurai'
           ,'rajaram25@gmail.com'
           ,'73097251397'
           ,'welcome'
           ,1)


USE [MakeYourLifeBliss]
GO

SELECT [userId]
      ,[UserName]
      ,[Gender]
      ,[DateOfBirth]
      ,[PlaceOfBirth]
      ,[Email]
      ,[MobileNo]
      ,[Password]
      ,[status]
  FROM [dbo].[User]
GO


GO

