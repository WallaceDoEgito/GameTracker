CREATE DATABASE GameTracker;
GO

USE GameTracker;
GO

CREATE TABLE Jogos(
    GameId int PRIMARY KEY IDENTITY(1,1),
    GameName VARCHAR(64) NOT NULL,
    GameImageUrl VARCHAR(256) NOT NULL,
    BackgroundCoverUrl VARCHAR(256),
    HoursPlayed REAL,
    Review VARCHAR(1024),
    Rating TINYINT 
);  