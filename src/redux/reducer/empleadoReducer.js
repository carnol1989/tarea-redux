import { ADD_EMPL, UPDATE_EMPL, DELETE_EMPL, SHOW_EMPL } from "../actions/empleadoActions";

const initialState = {
    /*empleados: [
        {
            id: '1',
            name: 'Carlos Nole',
            email: 'cnolemac@everis.com',
            phone: '12345'
        }
    ]*/

    empleados: JSON.parse(localStorage.getItem("empleadosLocal")) || []
}

const empleadoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_EMPL:
            return {
                ...state,
                empleados: action.payload
            }

        case ADD_EMPL:
            return {
                ...state,
                empleados: [
                    action.payload,
                    ...state.empleados
                ]
            }

        case UPDATE_EMPL:
            return {
                ...state,
                empleados: state.empleados.map(empleado => {
                    if (action.payload.id === empleado.id) {
                        return {
                            ...empleado,
                            id: action.payload.id,
                            name: action.payload.name,
                            email: action.payload.email,
                            phone: action.payload.phone
                        }
                    }
                    return empleado
                })
            }

        case DELETE_EMPL:
            return {
                ...state,
                empleados: state.empleados.filter(empleado => {
                    return empleado.id !== action.payload.id
                })
            }
        
        default:
            return state;
    }
}

export default empleadoReducer