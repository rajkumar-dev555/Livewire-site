import pic from "../../asset/Contact/@.png"
import pic1 from "../../asset/Contact/email.png"
import pic2 from "../../asset/Contact/Address-removebg-preview.png"

import pic3 from "../../asset/Contact/contact.png"

import { Footer } from "../Footer/Footer"

export const Contact = () => {


    const Contact = [
        {
            image: pic,
            tittle: "Phone Number",
            text: "+91 8870275880 / 8807148869",
        },
        {
            image: pic1,
            tittle: "Email Address",
            text: "tn.cbehopecollege@livewireindia.com , gayathri.it.tce@gmail.com",
        },
        {
            image: pic2,
            tittle: "Address",
            text: "Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004",
        }


    ]

    return (
        <div>

            <div>
                <div className=" bg-[url('https://web.archive.org/web/20240505204904im_/https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/06/inner4.jpg')] h-[75vh] bg-no-repeat">

                    <h1 className="text-[50px] font-bold text-white text-center lg:pt-[13%] font-serif pt-44">Contact</h1>

                    <div>
                        <p className="text-white text-sm font-serif text-center font-medium">Become a Blockchain Expert with NASSCOM Accredited Training <span className="text-white px-3">/</span>  Contact </p>

                    </div>

                </div>
            </div>

            <div className="lg:flex gap-5 justify-center lg:pb-3 pb-3  px-2 pt-10 ">
                {Contact.map((Contact, index) => (
                    <div className="bg-[#F1F6FC] lg:w-[25vw] h-[40vh] rounded px-2">

                        <img src={Contact.image} alt="" className="h-20  lg:mt-9 lg:px-32 px-32 mt-4 " />
                        <h3 className="text-center text-2xl pt-3 font-serif font-medium">{Contact.tittle}</h3>
                        <p className="text-center text-sm pt-2 ">{Contact.text}</p>


                    </div>

                ))}
            </div>

            <div className="flex justify-center pb-2 px-2 pt-14 ">
                <div className="hidden lg:flex">
                    <img src={pic3} alt="" className="h-[70vh] " />
                </div>
                <div className="bg-[#1273EB] lg:w-[36vw] ">
                    <p className="text-1xl pl-14 pt-4 font-bold text-white font-serif">Let's Talk</p>
                    <h2 className="text-white pl-14 pt-4 font-bold text-3xl font-serif">Get In Touch</h2>

                    <div className="pl-6">

                        <div className="">

                            <input className="lg:w-[26vw] w-full  mt-3 placeholder:text-white pl-2 bg-blue-400  rounded h-7 font-serif" type="text" placeholder="Name" />
                        </div>
                        <div className="lg:flex gap-8  mt-3">
                            <input className="rounded  bg-blue-400  placeholder:text-white font-serif pl-2 h-7 w-full lg:w-[170px] " span type="text " placeholder="Email" />
                            <input className="rounded  bg-blue-400 placeholder:text-white font-serif pl-2 h-7 w-full lg:w-[170px] " type="text" placeholder="Password" />
                        </div>
                          
                          <textarea className="lg:w-[26vw] mt-4 bg-blue-400 placeholder:text-white font-serif pl-2 " name="" id="" placeholder="Your Message Here" >
                                  
                          </textarea>

                    </div>
                       <button className="bg-white text-blue-500 h-14 lg:w-[10vw] rounded ml-32 mt-10">SUBMIT NOW</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}