import React from 'react'

const AddEmpleadoForm = ({
    onSubmit,
}) => {
    return (
        <>
            <h4>Agregar Empleado</h4>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" className="form-control" placeholder="Ingresar nombre empleado" />
                <input type="text" name="email" className="form-control" placeholder="Ingresar email empleado" />
                <input type="text" name="phone" className="form-control" placeholder="Ingresar telefono empleado" />
                <button className="btn btn-primary mt-1 btn-block">Agregar Empleado</button>
            </form>
        </>
    )
}

export default AddEmpleadoForm