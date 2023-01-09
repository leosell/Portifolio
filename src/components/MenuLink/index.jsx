import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({ children, to }) => {

    const localizacao = useLocation()

    return (
        <Link to={to} className={`${localizacao.pathname === to ? 'text-red-600' : ''}`}>
            { children }
        </Link>
    )
}

export default MenuLink