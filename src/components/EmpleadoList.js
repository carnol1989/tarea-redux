import React from 'react'

const EmpleadoList = ({
    empleados,
    updateEmpleado,
    deleteEmpleado,
    editarFila
}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th style={{ textAlign: 'center' }}>Empleado</th>
                    <th style={{ textAlign: 'center' }}>Email</th>
                    <th style={{ textAlign: 'center' }}>Telefono</th>
                    <th style={{ textAlign: 'center' }} colSpan="2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(empleado => (
                    <tr key={empleado.id}>
                        <td>{empleado.name}</td>
                        <td>{empleado.email}</td>
                        <td>{empleado.phone}</td>
                        <td>
                            <button type="button" className="btn btn-primary" 
                                onClick={() => editarFila(empleado)}>
                                <span className="glyphicon glyphicon-pencil"></span>
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger" 
                                onClick={() => deleteEmpleado(empleado)}>
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmpleadoList