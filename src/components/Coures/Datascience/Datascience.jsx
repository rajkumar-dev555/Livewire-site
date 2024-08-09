import pic from "../../../asset/cours/fullstack/time.png"
import pic1 from "../../../asset/cours/fullstack/world.png"
import pic2 from "../../../asset/cours/fullstack/like.png"
import pic3 from "../../../asset/cours/fullstack/setting.png"
import pic4 from "../../../asset/cours/fullstack/time.png"

import { Footer } from "../../Footer/Footer"

export const Datascience = () => {
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
                <div className="bg-[url('https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinks.8dd35e85.fill-1366x700.format-jpeg.jpegquality-80.jpg')] lg:h-[65vh]">
                    <h1 className="text-white font-serif text-[35px] text-center pt-44">Data Science</h1>
                    <h6 className="text-white text-center text-sm lg:pl-70 pt-2  ">Extract insights and patterns from big data for informed decision-making.</h6>
                </div>

                <div className="bg-[#E6F1FF]  lg:mx-[15%] ">
                    <h1 className="text-2xl font-bold font-serif pl-5">Course - Key highlights</h1>

                    <div className="lg:flex justify-center lg:gap-14 lg:pt-10 pb-7 ">
                        {key.map((Key, index) => (
                            <div className="text-center lg:mt-0" key={index}>
                                <img src={Key.image} alt="" className="lg:pl-5 pl-[41%]" />
                                <p className="text-sm  pt-2 ">{Key.title}</p>
                                <h1 className="text-1xl font-bold font-serif pt-1 ">{Key.text}</h1>
                            </div>

                        ))}
                    </div>

                </div>

                <div className="">
                    <div className="">
                        <h1 className="text-2xl pt-5 font-medium font-serif   lg:pl-56">Learn - Data Science & Data Engineering </h1>
                        <p className="text-1xl lg:w-[69vw] lg:pl-56 pt-4  font-serif px-3">70% of the Data Science job openings require less than five years of experience.
                            Our Data Science, Data Engineering with Python, Data Science with R, and Data Analytics with Power BI courses meet the increasing demand for skilled professionals in this field.
                            Learning data science and data analytics can open up many career opportunities in fields such as data analysis, business intelligence, and decision making.</p>

                        <h1 className="pt-4 lg:text-2xl text-3xl font-serif lg:pl-56">Course objective</h1>
                        <p className="lg:text-1xl font-serif pt-3 lg:pl-56 lg:w-[69vw] px-2">Our courses provide students with the knowledge they need to become proficient in their chosen field of Data Science.
                            Our training programmes aim to bridge the gap between industry demands and aspiring professionals' current skill set, assisting them in achieving their career objectives.
                            We provide comprehensive training to prepare students for a rewarding career in data science.</p>
                    </div>
                </div>

                <div className="">
                    <h1 className="pt-4 text-2xl font-serif lg:pl-56 px-2">Key Topics Covered</h1>

                    <div className="lg:grid grid-cols-2 lg:w-[90vw] pb-5">
                        <div className="pt-3">

                            <h6 className="lg:pl-60 font-medium text-1xl px-3">Data Analytics using Power BI</h6>

                            <div className="text-sm font-serif lg:pl-64 px-3  ">
                                <li>Appending data</li>
                                <li className="" >Merge Queries & M Language</li>
                                <li >Objects, bookmarks, slicers </li>
                                <li >Tables, MAPS, charts</li>
                                <li >Text functions</li>
                            </div>
                        </div>
                        <div className="pt-3">

                            <h6 className="lg:pl-3 font-medium text-1xl px-3">Data Science using R</h6>

                            <div className="text-sm font-serif lg:pl-5 px-3  ">
                                <li>Clustering, Classification</li>
                                <li className="" >Decision Tree and Forecasting</li>
                                <li >R Programming </li>
                                <li >Regression Analysis</li>
                                <li >Statistics & Probability</li>
                            </div>
                        </div>
                        <div className="pt-3">

                            <h6 className="lg:pl-60 font-medium text-1xl px-3">Data Science</h6>

                            <div className="text-sm font-serif lg:pl-64 px-3  ">
                                <li>Data Analytics & its Methodologies</li>
                                <li className="" >Data Mining</li>
                                <li >Data Visualization</li>
                                <li >SAS & SPSS</li>
                                <li >Supervised learning algorithm</li>
                            </div>
                        </div>
                        <div className="pt-3">

                            <h6 className="lg:pl-3 font-medium text-1xl px-3 ">Data Science & Data Engineering using Python</h6>

                            <div className="text-sm font-serif lg:pl-5 px-3  ">
                                <li>API libraries</li>
                                <li className="" >Clustering & classification</li>
                                <li >Data Distribution & correlation</li>
                                <li >Decision free</li>
                                <li >Exploratory Data Analysis</li>
                                <li >Forecasting</li>
                                <li >Text mining</li>

                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <h1 className="text-2xl font-serif lg:pl-60 pt-5">Scope & Career Opportunities</h1>

                    <p className="text-1xl lg:pl-64 pt-3 lg:w-[70vw] font-serif pb-3 px-2">The Full Stack Development course using MEAN/MERN stack has a wide range of career opportunities.
                        With the growing demand for web development skills, learners can expect to work as Full Stack Developers, Web Developers, Software Engineers, and more.
                        This course will enable learners to build dynamic and responsive web applications that can be easily scaled to meet the demands of businesses and users.</p>
                </div>

            </div>
            <Footer/>
        </div>
    )
}