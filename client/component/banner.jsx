function Banner(){
    return(
        <div className="p-6">
            <div className="flex max-sm:flex-col">
            <div className="sm:w-1/2 sm:mt-10">
                <h1 className="text-6xl block m-auto sm:w-2/3 max-sm:text-5xl">Discover The<br className="mb-4 max-sm:mb-2"/>Best Computer<br className="mb-4 max-sm:mb-2"/>for You!</h1>
                <p className="block m-auto sm:w-2/3 mt-10 max-sm:mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione a rem illum nobis ut magnam labore dolorem vero, placeat error ab fugiat quas hic aut consequuntur libero debitis perspiciatis odio?</p>

                {/* this block will only display in mobile view mode */}
                <div className="sm:hidden">

                </div>

                <a className="bg-black text-white rounded-full p-4 w-2/3 block m-auto mt-10 text-center sm:text-xl" href="#">Shop Now</a>
            </div>
            <div className="w-1/2 sm:mt-10 max-sm:mt-5">
            {/* text-center - should be added to the above style code for better display */}
                <h1>Hello world</h1>
            </div>
            </div>
        </div>
    )
}
export default Banner;