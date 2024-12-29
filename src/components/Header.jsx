function Header() {
    return (
        <section className="border-b px-10 sm:px-20 xl:px-32">
            <section className="flex justify-between items-center py-8 xl:max-w-[1440px] 2xl:max-w-[1200px] m-auto">
                <div className="">
                    <img src="https://dummyimage.com/90x36/000/fff" alt="" />
                </div>
                <div className="flex items-center bg-light-brown px-5 py-3 rounded-full cursor-pointer">
                    <p className="mr-1 text-white">Terug naar pakket</p>
                    <img className="rounded-full" src="https://dummyimage.com/16x16/fff/000&text=x" alt="" />
                </div>
            </section>
        </section>
    )
}

export default Header;