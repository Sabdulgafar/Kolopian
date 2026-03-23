function NavBar(){
    const Links = [
        {id: 1, name:"HOME", href: "#"},
        {id: 2, name:"ABOUT", href: "/about"},
        {id: 3, name:"NEWS", href: "/news"},
        {id: 4, name:"CONTACT US", href: "/contact"}
    ]

    return(
        <nav className="bg-gray-200 pt-6 pb-6">
            <div class="flex justify-around">
                <div><h2 className="text-xl">KOLOPIAN</h2></div>
                <div className="max-sm:hidden">
                    <ul>
                        {Links.map((link)=>(
                        <li className="inline mx-3">
                            <a
                            key={link.id}
                            name={link.name}
                            href={link.href}
                            className="hover:bg-black hover:text-white hover:rounded-full p-2"
                            >{link.name}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span className="">
                        <h1 className="text-white bg-black rounded-full p-1.5 -m-2 text-md border-2 border-black hover:bg-slate-300 hover:text-black">Shop Now</h1>
                    </span>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;