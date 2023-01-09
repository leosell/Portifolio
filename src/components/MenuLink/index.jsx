import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({ children, to }) => {

    const localizacao = useLocation()

    return (
        <Link to={to} className={`hover:text-menuHeaderHover ${localizacao.pathname === to ? 'text-menuHeader' : ''}`}>
            { children }
        </Link>
    )
}

export default MenuLink