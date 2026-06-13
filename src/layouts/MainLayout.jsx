    import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import TvIcon from '@mui/icons-material/Tv'
import PersonIcon from '@mui/icons-material/Person'

function MainLayout() {
    const [drawerAbierto, setDrawerAbierto] = useState(true)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            {/* Header azul */}
            <div style={{
                backgroundColor: '#1976d2',
                padding: '15px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                <span
                    onClick={() => setDrawerAbierto(!drawerAbierto)}
                    style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }}
                >
                    ☰
                </span>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                    192400 - Juan Polanco
                </span>
            </div>

            <div style={{ display: 'flex', flex: 1 }}>

¡                {drawerAbierto && (
                    <div style={{
                        width: '180px',
                        backgroundColor: 'white',
                        borderRight: '1px solid #e0e0e0',
                        padding: '20px 0'
                    }}>
                        <Link to="/productos" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 20px',
                            textDecoration: 'none',
                            color: '#333'
                        }}>
                            <TvIcon /> produtcos
                        </Link>
                        <Link to="/usuarios" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 20px',
                            textDecoration: 'none',
                            color: '#333'
                        }}>
                            <PersonIcon /> usuarios
                        </Link>
                    </div>
                )}

                <div style={{ flex: 1, padding: '30px', overflowY: 'auto', fontSize: '14px' }}>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default MainLayout