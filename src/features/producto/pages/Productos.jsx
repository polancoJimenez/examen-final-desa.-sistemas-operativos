import { useState, useEffect } from 'react'
import { getProductos } from '../service/productoService'
import ProductoCard from '../components/ProductoCard'

function Productos() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getProductos().then((data) => {
            setProductos(data)
            setCargando(false)
        })
    }, [])

    if (cargando) return <p>Cargando productos...</p>

    return (
        <div>
            <h2 style={{ marginBottom: '30px', fontWeight: 'normal' }}>Products Available</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px'
            }}>
                {productos.map((producto) => (
                    <ProductoCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    )
}

export default Productos