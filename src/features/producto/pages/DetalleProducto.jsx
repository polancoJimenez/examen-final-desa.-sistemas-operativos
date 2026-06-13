import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductoById } from '../service/productoService'

function DetalleProducto() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [producto, setProducto] = useState(null)
    const [imagenActual, setImagenActual] = useState(0)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getProductoById(id).then((data) => {
            setProducto(data)
            setCargando(false)
        })
    }, [id])

    if (cargando) return <p>Cargando producto...</p>
    if (!producto) return <p>Producto no encontrado</p>

    return (
        <div>
            <button
                onClick={() => navigate('/productos')}
                style={{
                    marginBottom: '20px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    color: '#1976d2',
                    fontSize: '15px',
                    padding: '0',
                }}
            >
                ← Volver a productos
            </button>

            <div style={{ display: 'flex', gap: '30px' }}>

                {/* Galería */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {producto.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`img-${index}`}
                                onClick={() => setImagenActual(index)}
                                onError={e => e.target.src = 'https://placehold.co/600x400'}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    border: imagenActual === index ? '2px solid #1976d2' : '2px solid transparent'
                                }}
                            />
                        ))}
                    </div>
                    <img
                        src={producto.images[imagenActual]}
                        alt={producto.title}
                        onError={e => e.target.src = 'https://placehold.co/600x400'}
                        style={{ width: '500px', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                    <p style={{ color: '#666', marginBottom: '8px' }}>Nuevo</p>
                    <h1 style={{ fontSize: '28px', marginBottom: '15px' }}>{producto.title}</h1>
                    <span style={{
                        backgroundColor: '#1976d2',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '13px'
                    }}>
                        {producto.category?.name}
                    </span>
                    <h2 style={{ fontSize: '36px', margin: '20px 0 5px' }}>${producto.price}</h2>
                    <p style={{ color: '#2e7d32', marginBottom: '20px' }}>Envío gratis</p>
                    <hr style={{ marginBottom: '20px' }} />
                    <h3 style={{ marginBottom: '10px' }}>Acerca de este producto</h3>
                    <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>{producto.description}</p>
                    <button style={{
                        width: '100%',
                        padding: '15px',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginBottom: '10px'
                    }}>
                        COMPRAR AHORA
                    </button>
                    <button style={{
                        width: '100%',
                        padding: '15px',
                        backgroundColor: 'white',
                        color: '#333',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        AGREGAR AL CARRITO
                    </button>
                    
                    <hr style={{ margin: '30px 0' }} />
                    <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>Descripción</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{producto.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto