USE [MakeYourLifeBliss]
GO

/****** Object:  Table [dbo].[User]    Script Date: 5/31/2020 3:54:39 PM ******/
DROP TABLE [dbo].[User]
GO



CREATE TABLE [dbo].[User](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	Gender [nvarchar](1) NOT NULL,
	DateOfBirth DateTime  Not Null,
	PlaceOfBirth Nvarchar(50) Not Null,
	[Email] nvarchar(50) NOT NULL,
	MobileNo nvarchar(50) not NULL,
	[Password] [nvarchar](50) NOT NULL,
	[status] [int] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

