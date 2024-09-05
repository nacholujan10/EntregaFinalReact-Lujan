
# Proyecto de E-commerce con React - Numeral Agro

Este proyecto es una tienda en línea desarrollada en React, donde los usuarios pueden navegar por un catálogo de productos, agregar artículos a su carrito, ajustar la cantidad de productos en el carrito y completar el proceso de compra. Después de finalizar una compra, los usuarios reciben un mensaje de confirmación con el ID de la orden. Además, el proyecto utiliza Firebase para gestionar el almacenamiento de productos y las órdenes generadas por los usuarios.




## Funcionalidades
-Catálogo de Productos: Muestra una lista de productos, los cuales pueden ser filtrados por categorías. Al hacer clic en un producto, se pueden ver más detalles.

-Carrito de Compras: Los usuarios pueden añadir productos al carrito, modificar la cantidad de cada producto o eliminar artículos. También pueden ver el total actualizado en tiempo real.

-Finalización de Compra: Los usuarios ingresan sus datos de contacto y deben confirmar su correo electrónico dos veces antes de completar la compra. Al finalizar, se genera una orden que se guarda en Firebase.

-Confirmación de Pedido: Se muestra un mensaje de confirmación con el ID de la orden generada y un botón para volver al inicio.
## Herramientas

React.js
-Se utilizo React para desarrollar la interfaz de usuario. Los componentes y hooks como useState y useEffect permiten una gestion eficiente del estado y la actualizacion dinamica de la interfaz.
El manejo global del estado se realiza con Context API, lo que facilita compartir información entre componentes.

React Router
-Para manejar la navegación dentro de la aplicación, se utilizó React Router. Esto permite que los usuarios puedan moverse entre diferentes páginas, como el catálogo de productos, los detalles de un producto, el carrito, y la página de finalización de compra.

React Bootstrap
-Se usó React Bootstrap para construir la interfaz. Proporciona componentes listos para usar, como tablas, botones, formularios y el menú de navegación.

React Icons
-Los íconos de React Icons se utilizaron para mejorar la experiencia visual, como el icono del carrito en el menú de navegación.

Firebase Firestore
-Firestore se utilizó como base de datos en tiempo real, donde se almacenan tanto los productos disponibles en la tienda como las órdenes de los usuarios.