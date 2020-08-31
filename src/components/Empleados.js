import React, { useEffect, useState } from "react"
import { connect, useDispatch } from 'react-redux'
import { addEmpleado, updateEmpleado, deleteEmpleado } from "../redux/actions/empleadoActions"
import EmpleadoList from "./EmpleadoList"
import AddEmpleadoForm from "./AddEmpleadoForm"
import EditEmpleadoForm from "./EditEmpleadoForm"

const Empleados = ({
    empleados,
    addEmpleado,
    updateEmpleado,
    deleteEmpleado
}) => {
    const [ actualEmpleado, setActualEmpleado ] = useState([{}])
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem('empleadosLocal', JSON.stringify(empleados))
    }, [empleados])

    const editarFila = (empleado) => {
        setEditing(true)
        setActualEmpleado({
            id: empleado.id,
            name: empleado.name,
            email: empleado.email,
            phone: empleado.phone
        })
    }    

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target[0].value
        const email = event.target[1].value
        const phone = event.target[2].value

        addEmpleado({
            id: new Date().getTime(),
            name,
            email,
            phone
        })

        event.target[0].value = ''
        event.target[1].value = ''
        event.target[2].value = ''
    }

    return (
        <div>
            <h1>Empleados: {empleados.length}</h1>
            <div className="row">
                <div className="col-7">
                    <EmpleadoList empleados={empleados} updateEmpleado={updateEmpleado}
                        deleteEmpleado={deleteEmpleado} editarFila={editarFila} />
                </div>
                <div className="col-5">
                    {editing ? (
                        <>
                            <EditEmpleadoForm editing={editing} 
                                setEditing={setEditing} 
                                actualEmpleado={actualEmpleado} 
                                updateEmpleado={updateEmpleado} />
                        </>
                    ) : (
                            <>
                                <AddEmpleadoForm onSubmit={handleSubmit} />
                            </>
                        )}
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        empleados: state.empleadoReducer.empleados
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmpleado: (empleado) => dispatch(addEmpleado(empleado)),
        updateEmpleado: (empleado) => dispatch(updateEmpleado(empleado)),
        deleteEmpleado: (empleado) => dispatch(deleteEmpleado(empleado))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Empleados)

//export default Empleados