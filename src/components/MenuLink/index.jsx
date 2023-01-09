import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({ children, to }) => {

    const localizacao = useLocation()

    return (
        <Link to={to} className={`${localizacao.pathname === to ? 'text-menuHeader hover:text-menuHeaderHover' : ''}`}>
            { children }
        </Link>
    )
}

export default MenuLink