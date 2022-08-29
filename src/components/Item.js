
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"

export default function Item(props) {
  const { producto, stock, comprar } = props
  const [productoStock, setProductoStock] = useState(stock)
  const imgStyles = {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
  const comprarItem = () => {
    setProductoStock(productoStock - 1)
    comprar()
  }

  return (
    <div className='producto'>
      <h3>{producto?.nombre}</h3>
      <img src={producto?.img} alt={producto?.nombre} style={imgStyles}/>
      <p>{producto?.descripcion}</p>
      <h5>En stock: {productoStock > 0 ? productoStock : <span>agotado</span>}</h5>
      <button onClick={comprarItem} disabled={productoStock === 0}>{productoStock > 0 ? "COMPRAR" : "SIN STOCK"}</button>
    </div>
  )
}
