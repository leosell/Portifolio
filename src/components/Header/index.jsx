import MenuLink from "../MenuLink";

const Header = () => {
    return (
        <div className="h-20 pt-5">
            <header className="flex items-center justify-around">
                <nav className="flex justify-around pt-2 text-base gap-24 font-sans font-normal">
                    <MenuLink to='/'>
                        Home
                    </MenuLink>

                    <MenuLink to='/about'>
                        About
                    </MenuLink>

                    <MenuLink to='/work'>
                        Work
                    </MenuLink>
                    
                    <MenuLink to='/writing'>
                        Writing
                    </MenuLink>
                    
                    <MenuLink to='/contact'>
                        Contact
                    </MenuLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;
