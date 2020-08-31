import React, { useState, useEffect } from 'react'

const EditEmpleadoForm = (
    props
) => {
    const [empleado, setEmpleado] = useState(props.actualEmpleado)

    useEffect(
        () => {
            setEmpleado(props.actualEmpleado)
        }, [props]
    )

    const handleInputChange = event => {
        console.log(event.target)
        const { name, value } = event.target

        setEmpleado({
            ...empleado, [name]: value
        })
    }

    return (
        <>
            <h4>Editar Empleado</h4>
            <form onSubmit={event => {
                event.preventDefault()
                props.setEditing(false)
                props.updateEmpleado(empleado)    
            }}>
                <input type="text" name="name" className="form-control" 
                    placeholder="Ingresar nombre empleado" 
                    onChange={handleInputChange}
                    value={empleado.name} />
                <input type="text" name="email" className="form-control" 
                    placeholder="Ingresar email empleado" 
                    onChange={handleInputChange}
                    value={empleado.email} />
                <input type="text" name="phone" className="form-control" 
                    placeholder="Ingresar telefono empleado" 
                    onChange={handleInputChange}
                    value={empleado.phone} />
                <button className="btn btn-primary mt-1 btn-block">Editar Empleado</button>
                <button className="btn btn-danger mt-1 btn-block" 
                    onClick={() => props.setEditing(false)}>Cancelar</button>
        </form>
        </>
    )
}

export default EditEmpleadoForm