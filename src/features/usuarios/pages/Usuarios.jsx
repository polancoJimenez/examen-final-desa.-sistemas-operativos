import { useState, useEffect } from 'react'
import { getUsuarios } from '../service/usuarioService'
import UsuarioCard from '../components/UsuarioCard'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getUsuarios().then((data) => {
            setUsuarios(data)
            setCargando(false)
        })
    }, [])

    if (cargando) return <p>Cargando usuarios...</p>

    return (
        <div>
            <h2 style={{ marginBottom: '30px', fontWeight: 'normal' }}>Users Available</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {usuarios.map((usuario) => (
                    <UsuarioCard key={usuario.id} usuario={usuario} />
                ))}
            </div>
        </div>
    )
}

export default Usuarios