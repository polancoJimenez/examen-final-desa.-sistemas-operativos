import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Productos from '../features/producto/pages/Productos'
import DetalleProducto from '../features/producto/pages/DetalleProducto'
import Usuarios from '../features/usuarios/pages/Usuarios'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/productos" />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes