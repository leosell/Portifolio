import './index.css'

const Header = () => {
    return (
        <div className="containerMain">
            <header className="containerHeader">
                <div className="logo">
                    <h1><a href="#">LS</a></h1>
                </div>

                <div className="containerOpcoes">
                    <ul className='containerLista'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Writing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;