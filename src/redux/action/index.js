// Para agregar items al carrito

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}


//Para borrar items del carrito

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}