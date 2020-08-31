export const ADD_EMPL = 'ADD_EMPL'
export const UPDATE_EMPL = 'UPDATE_EMPL'
export const DELETE_EMPL = 'DELETE_EMPL'
export const SHOW_EMPL = 'SHOW_EMPL'

export const addEmpleado = (empleado) => ({
    type: ADD_EMPL,
    payload: empleado
})

export const updateEmpleado = (empleado) => ({
    type: UPDATE_EMPL,
    payload: empleado
})

export const deleteEmpleado = (empleado) => ({
    type: DELETE_EMPL,
    payload: empleado
})