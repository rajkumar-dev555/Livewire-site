import live from "../../asset/img/image.png"


function Nav() {
    return (
        <div >
            <div className="bg-[url('https://web.archive.org/web/20240511193708im_/https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/04/home2-1.jpg')]">

          
            
            <div className=" flex justify-between p-16 mr-40  ">
                <div>
                    <img src={live}></img>
                </div>
                <div>
                    <nav className="flex gap-5 mt-4 ">
                        <ul className="flex text-white gap-7 font-medium ">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </nav>
                    

                </div>
                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>


                </div> */}

            </div>
            </div>
        </div>
    )
}

export default Nav;