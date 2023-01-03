

const Header = () => {
    return (
        <div className="h-20 pt-5">
            <header className="flex items-center justify-around">
                <div className="text-3xl font-sans font-bold">
                    <h1><a className="text-white no-underline" href="#">LS</a></h1>
                </div>

                <div className="w-96">
                    <ul className="flex justify-around pt-2 text-base gap-24 font-sans font-normal">
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