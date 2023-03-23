-- Listar las pistas ordenadas por el número de veces que aparecen en playlists de forma descendente
SELECT
    *
FROM (
    SELECT
        T.Name AS Cancion,
        COUNT(*) AS 'Numero de playlist en las que paraece'
    FROM (
        Track T
        LEFT JOIN PlaylistTrack PT ON PT.TrackId = T.TrackId
        LEFT JOIN Playlist P ON P.PlaylistId = PT.PlaylistId
    )
    GROUP BY T.Name
)
AS S
ORDER BY S.Cancion DESC

-- Listar las pistas más compradas (la tabla InvoiceLine tiene los registros de compras)
SELECT
    *
FROM (
    SELECT
        T.Name,
        COUNT(*) AS Recuento
    FROM (
        Track T
        INNER JOIN InvoiceLine IL ON T.TrackId = IL.TrackId
    )
    GROUP BY T.Name
) AS S
ORDER BY S.Recuento DESC

-- Listar los artistas más comprados
SELECT
    *
FROM (
    SELECT
        Art.Name AS Artitas,
        COUNT(*) AS 'Cantidad de ventas'
    FROM (
        Track T
        INNER JOIN InvoiceLine IL ON T.TrackId = IL.TrackId
        INNER JOIN Album Alb ON Alb.AlbumId = T.AlbumId
        INNER JOIN Artist Art ON Art.ArtistId = Alb.ArtistId
    )
    GROUP BY Art.Name
) AS C
ORDER BY C.[Cantidad de ventas] DESC

-- Listar las pistas que aún no han sido compradas por nadie
SELECT 
    T.Name AS Canciones,
    IL.InvoiceLineId AS 'Clave de venta'
FROM (
    Track T
    LEFT JOIN InvoiceLine IL ON IL.TrackId = T.TrackId
)
WHERE IL.InvoiceLineId IS NULL

-- Listar los artistas que aún no han vendido ninguna pista
SELECT
    Art.Name AS Artitas,
    COUNT(IL.Quantity) AS Ventas
FROM (
    Track T
    LEFT JOIN InvoiceLine IL ON T.TrackId = IL.TrackId
    LEFT JOIN Album Alb ON Alb.AlbumId = T.AlbumId
    LEFT JOIN Artist Art ON Art.ArtistId = Alb.ArtistId
)
GROUP BY 
    Art.Name
HAVING COUNT(IL.Quantity) = 0
ORDER BY Ventas DESC