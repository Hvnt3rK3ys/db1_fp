CREATE TABLE Bodega (
                        idBodega INT PRIMARY KEY,
                        capacidad VARCHAR(45) NOT NULL,
                        producto_tipo VARCHAR(45) NOT NULL
);

CREATE TABLE Cliente (
                         idCliente INT PRIMARY KEY,
                         nombre VARCHAR(45) NOT NULL,
                         factura VARCHAR(45) NOT NULL
);

CREATE TABLE Empleado (
                          idEmpleado INT PRIMARY KEY,
                          nombre VARCHAR(45) NOT NULL,
                          cargo VARCHAR(45) NOT NULL
);

CREATE TABLE Exhibidores (
                             idExhibidores INT,
                             producto_tipo VARCHAR(45) NOT NULL,
                             ubicacion VARCHAR(45),
                             Bodega_idBodega INT,
                             PRIMARY KEY (idExhibidores, Bodega_idBodega),
                             FOREIGN KEY (Bodega_idBodega) REFERENCES Bodega(idBodega)
);

CREATE TABLE Factura (
                         idFactura INT,
                         fecha DATETIME NOT NULL,
                         total DOUBLE NOT NULL,
                         Cliente_idCliente INT,
                         Empleado_idEmpleado INT,
                         PRIMARY KEY (idFactura, Cliente_idCliente, Empleado_idEmpleado),
                         FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente(idCliente),
                         FOREIGN KEY (Empleado_idEmpleado) REFERENCES Empleado(idEmpleado)
);

CREATE TABLE Producto (
                          idProducto INT,
                          nombre VARCHAR(45) NOT NULL,
                          precio DOUBLE NOT NULL,
                          cantidad INT NOT NULL,
                          Bodega_idBodega INT,
                          PRIMARY KEY (idProducto, Bodega_idBodega),
                          FOREIGN KEY (Bodega_idBodega) REFERENCES Bodega(idBodega)
);

CREATE TABLE Producto_has_Exhibidores (
                                          Producto_idProducto INT,
                                          Producto_Bodega_idBodega INT,
                                          Exhibidores_idExhibidores INT,
                                          Exhibidores_Bodega_idBodega INT,
                                          PRIMARY KEY (Producto_idProducto, Producto_Bodega_idBodega, Exhibidores_idExhibidores, Exhibidores_Bodega_idBodega),
                                          FOREIGN KEY (Producto_idProducto, Producto_Bodega_idBodega) REFERENCES Producto(idProducto, Bodega_idBodega),
                                          FOREIGN KEY (Exhibidores_idExhibidores, Exhibidores_Bodega_idBodega) REFERENCES Exhibidores(idExhibidores, Bodega_idBodega)
);

CREATE TABLE Producto_has_Factura (
                                      Producto_idProducto INT,
                                      Producto_Bodega_idBodega INT,
                                      Factura_idFactura INT,
                                      Factura_Cliente_idCliente INT,
                                      Factura_Empleado_idEmpleado INT,
                                      PRIMARY KEY (Producto_idProducto, Producto_Bodega_idBodega, Factura_idFactura, Factura_Cliente_idCliente, Factura_Empleado_idEmpleado),
                                      FOREIGN KEY (Producto_idProducto, Producto_Bodega_idBodega) REFERENCES Producto(idProducto, Bodega_idBodega),
                                      FOREIGN KEY (Factura_idFactura, Factura_Cliente_idCliente, Factura_Empleado_idEmpleado) REFERENCES Factura(idFactura, Cliente_idCliente, Empleado_idEmpleado)
);

CREATE TABLE Proveedor (
                           idProveedor INT,
                           nombre VARCHAR(45) NOT NULL,
                           contacto VARCHAR(45),
                           Bodega_idBodega INT,
                           PRIMARY KEY (idProveedor, Bodega_idBodega),
                           FOREIGN KEY (Bodega_idBodega) REFERENCES Bodega(idBodega)
);