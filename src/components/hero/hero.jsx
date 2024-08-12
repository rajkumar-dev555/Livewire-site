import Carousel from 'react-bootstrap/Carousel';
// import hero from '../../asset/hero/hero.png'
// import hero2 from '../../asset/hero/hero2.png'
// import hero3 from '../../asset/hero/hero3.png'



function Hero() {
    return (
        <div>
            <div className="">
                <Carousel >
                    <Carousel.Item >
                        <div>
                            <div className="bg-[url('file:///C:/Users/Vignesh/Downloads/livewirepics/hero5.jpg')] bg-no-repeat bg-cover h-[80vh] mx-10 rounded-3xl">
                                {/* <img  src={hero} /> */}
                                
                                <h6 className='flex justify-center pt-48 text-blue-900 font-bold text-[250%]'></h6>
                                <p>Or menu at start with ₹149</p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div >
                        <div className="bg-[url('https://images.jdmagicbox.com/v2/comp/coimbatore/k3/0422px422.x422.240729112200.j5k3/catalogue/djaa78bemqzkiga-28zqu1qywj.jpg')] h-[100vh] mx-10 rounded-3xl">
                                {/* <img src={hero2} /> */}
                                <h6>FLAT ₹150 OFF</h6>
                                <p>Enjoy your food</p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item >
                        <div >
                        <div className="bg-[url('https://images.jdmagicbox.com/v2/comp/coimbatore/k3/0422px422.x422.240729112200.j5k3/catalogue/djaa78bemqzkiga-28zqu1qywj.jpg')] h-[100vh] mx-10 rounded-3xl">
                                {/* <img src={hero3} /> */}
                                <h6>BIRYANI START AT ₹129</h6>
                                <p>From Dum Safar</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Hero;