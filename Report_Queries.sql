/*
Consulta 1: Determinar un listado de los clientes con el código de la orden, el nombre de cada producto comprado, su fecha de compra, la cantidad, el valor unitario y el valor total. Listado de los productos que no se han vendido.
*/
SELECT
    C.idCliente AS ClienteID,
    C.nombre AS NombreCliente,
    F.idFactura AS CodigoOrden,
    P.nombre AS NombreProducto,
    F.fecha AS FechaCompra,
    P.cantidad AS Cantidad,
    P.precio AS ValorUnitario,
    (P.cantidad * P.precio) AS ValorTotal
FROM
    Cliente C
        JOIN
    Factura F ON C.idCliente = F.Cliente_idCliente
        JOIN
    Producto_has_Factura PF ON F.idFactura = PF.Factura_idFactura
        JOIN
    Producto P ON PF.Producto_idProducto = P.idProducto
ORDER BY
    C.idCliente, F.idFactura;

/*
Consulta 2: Listado de los productos que no se han vendido.
*/
SELECT
    COUNT(*) AS CantidadProductosNoVendidos
FROM
    Producto P
        LEFT JOIN
    Producto_has_Factura PF ON P.idProducto = PF.Producto_idProducto
WHERE
    PF.Producto_idProducto IS NULL;