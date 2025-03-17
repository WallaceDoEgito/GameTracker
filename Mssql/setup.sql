CREATE DATABASE GameTracker;
GO

USE GameTracker;
GO

CREATE TABLE Jogos(
    GameId int PRIMARY KEY IDENTITY(1,1),
    GameName VARCHAR(64) NOT NULL,
    GameImageUrl VARCHAR(256) NOT NULL,
    HoursPlayed REAL,
    Review VARCHAR(1024),
    Rating TINYINT 
);

INSERT INTO Jogos(GameName, GameImageUrl, HoursPlayed, Review, Rating) 
VALUES('Katana zero', 'https://i.scdn.co/image/ab67616d0000b273d3c12724ab66f21170225d22', 777.77, 'Inserção para teste', 5);    