import pic from "../../../asset/cours/fullstack/time.png"
import pic1 from "../../../asset/cours/fullstack/world.png"
import pic2 from "../../../asset/cours/fullstack/like.png"
import pic3 from "../../../asset/cours/fullstack/setting.png"
import pic4 from "../../../asset/cours/fullstack/time.png"

import { Footer } from "../../Footer/Footer"

export const Python = () => {
    const key = [
        {
            image: pic,
            title: "Program Duration",
            text: "160 Hours"
        },
        {
            image: pic1,
            title: "Accredited by",
            text: "NSDC"
        },
        {
            image: pic2,
            title: "Fexible Learning",
            text: "In-center and online"
        },
        {
            image: pic3,
            title: "Practical Learning",
            text: "Hands-on experience"
        },
        {
            image: pic4,
            title: "Learn from",
            text: "Industry Experts"
        },
    ]

    return (
        <div>
            <div>
                <div className="bg-[url('https://cdn.sanity.io/images/tlr8oxjg/production/9437d7766f7278267511f8a3672cde1aa6349872-1456x816.png?w=3840&q=100&fit=clip&auto=format')] h-[65vh] w-full bg-no-repeat bg-cover">
                    <h1 className="text-white text-center text-[35px] font-bold lg:pt-36 pt-14 pl-8">Python Full Stack Development</h1>
                    <h6 className="text-white text-center text-sm lg:pl-70 pt-2  ">Learn to Debug Python Code like A Pro. Master Advanced Python Programming!</h6>
                </div>

                <div className="bg-[#E6F1FF]  lg:mx-[15%] rounded ">
                    <h1 className="text-2xl font-bold font-serif pl-5">Course - Key highlights</h1>

                    <div className="lg:flex justify-center lg:gap-14 lg:pt-10 pb-7  ">
                        {key.map((Key, index) => (
                            <div className="text-center lg:mt-0 pb-2 mb-1  pt-2" key={index}>
                                <img src={Key.image} alt="" className="lg:pl-5 pl-[41%]" />
                                <p className="text-sm  pt-2 ">{Key.title}</p>
                                <h1 className="text-1xl font-bold font-serif pt-1 ">{Key.text}</h1>
                            </div>

                        ))}
                    </div>

                </div>

                <div className="">
                    <div className="">
                        <h1 className="text-2xl pt-5 font-medium font-serif   lg:pl-56 px-2">Course on Python - Training & Certification</h1>
                        <p className="text-1xl lg:w-[69vw] lg:pl-56 pt-4  font-serif px-3">Python is a versatile and widely used programming language known for its simplicity and readability.
                            It is used in various domains such as web development, data science, machine learning, and automation,
                            making it a valuable skill for career opportunities in software development, data analysis, and artificial intelligence.</p>

                        <h1 className="pt-4 lg:text-2xl text-3xl font-serif lg:pl-56  px-2">Course objective</h1>
                        <p className="lg:text-1xl font-serif pt-3 lg:pl-56 lg:w-[69vw] px-2">The goal of this course is to develop proficiency in the fundamental concepts of Python programming.
                            It teaches advanced Python concepts such as OOP, regular expressions, and database programming.
                            You will gain confidence in developing applications in Python and using Python for data analysis and visualisation through hands-on experience.</p>
                    </div>
                </div>

                <div>
                    <h1 className="pt-4 text-2xl font-serif lg:pl-56 px-2">Key Topics Covered</h1>

                    <h6 className="lg:pl-60 font-medium text-1xl px-3">Python</h6>

                    <div className="text-sm font-serif lg:pl-64 px-3  ">
                        <li>Control Flow</li>
                        <li className="" >Database Connectivity & Networking: SQL</li>
                        <li >Files, Modules & Packages </li>
                        <li >Functions & Data Structures</li>
                        <li >OOPs</li>
                        <li>Reference & Thread</li>
                    </div>

                </div>

                <div>
                    <h1 className="text-2xl font-serif lg:pl-56 pt-5 px-2">Scope & Career Opportunities</h1>

                    <p className="text-1xl lg:pl-60 pt-3 lg:w-[70vw] font-serif pb-3 px-2">The Full Stack Development course using MEAN/MERN stack has a wide range of career opportunities.
                        With the growing demand for web development skills, learners can expect to work as Full Stack Developers, Web Developers, Software Engineers, and more.
                        This course will enable learners to build dynamic and responsive web applications that can be easily scaled to meet the demands of businesses and users.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}