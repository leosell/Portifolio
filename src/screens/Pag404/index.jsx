import MenuLink from "../../components/MenuLink"


const Pag404 = () => {
    return (
        <main className="flex flex-col justify-center items-center h-tamanho-main">
            <h1 className="text-7xl pb-10">Error <strong className="">404</strong></h1>
            <h3 className="text-2xl pb-20">We can't find the page you're looking for...</h3>

            <MenuLink to='/' className='text-red-500'>
                Back to the beginning!
            </MenuLink>
        </main>
    )
}

export default Pag404