import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({ children, to }) => {

    const localizacao = useLocation()

    return (
        <Link to={to} className={`hover:text-cyan-400 ${localizacao.pathname === to ? 'text-cyan-600' : ''}`}>
            { children }
        </Link>
    )
}

export default MenuLink