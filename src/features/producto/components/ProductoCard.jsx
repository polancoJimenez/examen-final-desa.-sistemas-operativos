import { useNavigate } from 'react-router-dom'

function ProductoCard({ producto }) {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/producto/${producto.id}`)}
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
            }}
            
        >
            <img
                src={producto.images[0]}
                alt={producto.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                onError={e => e.target.src = 'https://placehold.co/600x400'}
            />
            <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '8px', fontSize: '16px' }}>{producto.title}</h3>
                <p style={{
                    color: '#666',
                    fontSize: '13px',
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {producto.description}
                </p>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>${producto.price}</p>
            </div>
        </div>
    )
}

export default ProductoCard