-- Listar las pistas (tabla Track) con precio mayor o igual a 1€
SELECT * FROM Track WHERE UnitPrice >= 1;

-- Listar las pistas de más de 4 minutos de duración
SELECT * FROM Track WHERE Milliseconds >= 240000;

-- Listar las pistas que tengan entre 2 y 3 minutos de duración
SELECT * FROM Track WHERE Milliseconds BETWEEN 120000 AND  180000;

-- Listar las pistas que uno de sus compositores (columna Composer) sea Mercury
SELECT * FROM Track WHERE Composer LIKE '%Mercury%'

-- Calcular la media de duración de las pistas (Track) de la plataforma
SELECT (AVG(Milliseconds) / 60000.0) FROM Track

-- Listar los clientes (tabla Customer) de USA, Canada y Brazil
SELECT * FROM Customer WHERE Country IN ('USA', 'Canada', 'Brazil')

-- Listar todas las pistas del artista 'Queen' (Artist.Name = 'Queen')
SELECT 
    T.Name, 
    Alb.Title, 
    Art.Name
FROM (
    Track T 
    INNER JOIN Album Alb ON T.AlbumId = Alb.AlbumId
    INNER JOIN Artist Art ON Alb.ArtistId = Art.ArtistId
    )
WHERE Art.Name = 'Queen'

-- Listar las pistas del artista 'Queen' en las que haya participado como compositor David Bowie
SELECT 
    T.Name, 
    Alb.Title, 
    Art.Name,
    T.Composer
FROM (
    Track T 
    INNER JOIN Album Alb ON T.AlbumId = Alb.AlbumId
    INNER JOIN Artist Art ON Alb.ArtistId = Art.ArtistId
    )
WHERE Art.Name = 'Queen' AND T.Composer LIKE '%David Bowie%'

-- Listar las pistas de la playlist 'Heavy Metal Classic'
SELECT 
    T.Name AS Cancion,
    Art.Name AS Artista,
    Alb.Title AS Album,
    P.Name AS Playlist
FROM (
    Track T 
    INNER JOIN PlaylistTrack Pt ON T.TrackId = Pt.TrackId
    INNER JOIN Playlist P ON P.PlaylistId = Pt.PlaylistId
    INNER JOIN Album Alb ON T.AlbumId = Alb.AlbumId
    INNER JOIN Artist Art ON Alb.ArtistId = Art.ArtistId
)
WHERE P.Name = 'Heavy Metal Classic'

-- Listar las playlist junto con el número de pistas que contienen
SELECT 
    P.Name, COUNT(*) AS Cantidad
FROM 
    Playlist P
    INNER JOIN PlaylistTrack Pt ON P.PlaylistId = Pt.PlaylistId
GROUP BY P.Name 

-- Listar las playlist (sin repetir ninguna) que tienen alguna canción de AC/DC
SELECT DISTINCT
    P.Name AS Playlist,
    Art.Name AS Artista,
    T.Name AS Cancion
FROM (
    Playlist P
    INNER JOIN PlaylistTrack Pt ON P.PlaylistId = Pt.PlaylistId
    INNER JOIN Track T ON Pt.TrackId = T.TrackId
    INNER JOIN Artist Art ON Art.ArtistId = T.TrackId
)
WHERE Art.Name = 'AC/DC'

-- Listar las playlist que tienen alguna canción del artista Queen, junto con la cantidad que tienen
SELECT
    P.Name AS Playlist,
    COUNT(*) AS 'Cantidad de canciones'
FROM (
    Playlist P
    INNER JOIN PlaylistTrack Pt ON P.PlaylistId = Pt.PlaylistId
    INNER JOIN Track T ON Pt.TrackId = T.TrackId
    INNER JOIN Artist Art ON Art.ArtistId = T.TrackId
)
WHERE Art.Name = 'Queen'
GROUP BY P.Name

-- Listar las pistas que no están en ninguna playlist

--WIP
SELECT
    T.Name, T.TrackId, P.PlaylistId, P.Name
FROM (
    Playlist P
    INNER JOIN PlaylistTrack Pt ON P.PlaylistId = Pt.PlaylistId
    INNER JOIN Track T ON Pt.TrackId = T.TrackId
)
WHERE P.PlaylistId IS NULL
ORDER BY TrackId ASC

-- 
SELECT 

-- 
SELECT 