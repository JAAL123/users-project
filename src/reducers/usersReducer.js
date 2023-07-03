export function usersReducer(state = [], action) {
    switch (action.type) {
        //maneja el estado para añadir un nuevo usuario al arreglo de objetos de usuarios
        //hace una copia del arreglo de objetos actual con el operador spread, y a el nuevo objeto que recibe
        //hace otra copia y le añade un id, en este caso se genera apartir de la funcion Date
        case 'addUser':
            return[
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                    
                }
            ];
        //maneja el estado para eliminar un registro, utiliza la funcion filter para que del arreglo de objetos
        //retorne una copia de todos los objetos filtrados que tengan distinto id al seleccionado
        case 'removeUser':
            return state.filter(user => user.id !== action.payload)
        //funcion default que retorna unicamente el estado actual
        default:
            return state;
    }
}