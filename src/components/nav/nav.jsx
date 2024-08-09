import live from "../../asset/img/live.png"


function Nav() {
    
    return (
        <div >
            <div className="">



                <div className=" hidden lg:flex justify-between p-5  mr-40  ">
                    <div>
                        <img src={live} />
                    </div>
                    <div>
                        <nav className="flex gap-5 mt-5 ">
                            <ul className="flex text-black gap-7 font-medium ">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">COURSES</a></li>
                                <li><a href="#">TEAM</a></li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                        </nav>


                    </div>
                    



                </div>

                <div className="sm:block lg:hidden">
                    <div className=" flex justify-between pt-16 ">
                    <img className="" src={live} />
                    <p className="mr-10 mt-5 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav;