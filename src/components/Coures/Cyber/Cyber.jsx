// import pic from "../../asset/image.png"
import pic1 from "../../../asset/cours/Programming.png"
import pic2 from "../../../asset/cours/accretide.png"
import pic3 from "../../../asset/cours/fexible.png"
import pic4 from "../../../asset/cours/learn.png"
import pic5 from "../../../asset/cours/practical.png"


export const Cyber = () => {


    const Coures = [
        {
            image: pic1,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        },
        {
            image: pic2,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        },
        {
            image: pic3,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        },
        {
            image: pic4,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        },
        {
            image: pic5,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        }
    ]



    return (
        <div className="">
            <div className="bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] h-[70vh]">

                <div className="flex justify-center">

                    <h1 className="pt-36  text-center text-white font-bold text-[45px] w-[60%] m-0 leading-tight ">Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</h1>
                </div>
                {/* <h1 className="text-center text-white font-bold text-[40px]">Skills Gap as an Ethical HackerCyber</h1> */}
                <div className="flex gap-5 justify-center">
                    <span className="text-white">Become a Blockchain Expert with NASSCOM Accredited Training </span>
                    <a href="" className="text-white">/</a>
                    <span className="text-white">Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</span>
                </div>


            </div>


            <h1 className=" text-3xl font-bold pt-10 pl-10">Course - Key highlights</h1>


            <div>
                {Coures.map((Coures, index) => (
                    <div className="" key={index}>
                        <img src={Coures.image} alt="" className="h-20" />
                    </div>
                ))}
            </div>


        </div>
    )
}