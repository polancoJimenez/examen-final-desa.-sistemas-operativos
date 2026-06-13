function UsuarioCard({ usuario }) {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
        }}>
            <img
                src={usuario.avatar}
                alt={usuario.name}
                onError={e => {
                    e.target.onerror = null
                    e.target.src = `https://ui-avatars.com/api/?name=${usuario.name}&background=random`
                }}
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }}
            />
            <div>
                <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{usuario.name}</p>
                <p style={{ color: '#666', fontSize: '13px' }}>{usuario.email}</p>
            </div>
        </div>
    )
}

export default UsuarioCard