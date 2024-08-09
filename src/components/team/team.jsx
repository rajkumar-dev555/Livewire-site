import mam from "../../asset/team/mam.png"
import sir from "../../asset/team/sir.png"
import vicky from "../../asset/team/vicky.png"
import vishnu from "../../asset/team/vishnu.png"
import akka from "../../asset/team/akka.png"
import nirumal from "../../asset/team/nirumal.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Team() {
   
    return (
        <div className="bg-slate-100 pb-4  ">
            <div className="flex  justify-center font-medium text-3xl pt-11 text-blue-700  ">
                <h2>Expert People</h2></div>
            <div className="flex  justify-center font-bold text-2xl pt-3">
                <h1>Our Team</h1>
            </div>
            <div className="sm:flex justify-center mt-10 gap-1  ">
                <div className="mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="h-full"
                    navigation
                    breakpoints={{
                        320:{
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    style={{
                        width: '', // This ensures the Swiper takes the full width of its container
                    }}
                >
                    
                </Swiper>

                <div className=" ">
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">
                        <img className=" zoom  rounded-2xl " src={mam}></img>
                    </div>
                    <h2 className="font-medium text-center">GAYATHRI KANDASAMY</h2>
                    <p className="text-center">CENTER HEAD</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl" src={sir}></img>
                    </div>
                    <h2 className="font-medium text-center">DineshChand G.R</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60" src={vicky}></img>
                    </div>
                    <h2 className="font-medium text-center">Vignesh</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60 " src={vishnu}></img>
                    </div>
                    <h2 className="font-medium text-center">vishnu</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60 w-52" src={akka}></img>
                    </div>
                    <h2 className="font-medium text-center">akka</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60" src={nirumal}></img>
                    </div>
                    <h2 className="font-medium text-center">Nirumal</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>

                <div className="mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
            </div>


        </div>
    )
}

export default Team;