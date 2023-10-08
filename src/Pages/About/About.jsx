import Navbar from "../Navbar/Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/5sTfJtn/banner2.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold p-10">Who we are</h1>

                        </div>

                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="md:text-5xl text-xl text-center  font-bold mb-10">We
                        <span className="text-[#eab917]"> Create Events</span> That Lasts</h2>
                    <p className="w-3/4 mt-4 mx-auto text-center text-xl">From Conferences and Seminars to Trade Shows and Expos or Team Building and Workshops Events to
                        Corporate Meetings, Award Ceremonies We offer full range of Events Management Services that scale to your needs & budget.</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
                    <div >
                        <img src="https://i.ibb.co/4M44wfk/banner3.jpg" alt="" />
                        <h2 className="text-center text-2xl font-bold mt-4">Our Vision</h2>
                        <p className="text-justify">We envision a world where corporate events are not just gatherings but transformative experiences that inspire, connect, and drive success. Our vision is to lead the way in redefining corporate events, setting new standards for creativity, innovation, and excellence.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/5sTfJtn/banner2.jpg" alt="" />
                        <h2 className="text-center text-2xl font-bold mt-4">Our Approach</h2>
                        <p className="text-justify"> we have developed a comprehensive and client-centric approach to corporate events that is rooted in innovation, collaboration, and attention to detail. Our approach is designed to ensure that every corporate event we organize is a resounding success, aligning with our clients' objectives and exceeding their expectations.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/12Gr9Yj/banner1.jpg" alt="" />
                        <h2 className="text-center text-2xl font-bold mt-4">Our Goals</h2>
                        <p className="text-justify">our primary goal is to deliver exceptional corporate events that not only meet but exceed the expectations of our clients. We are committed to creating memorable, impactful, and successful gatherings that drive results and leave a lasting impression. Our goals for corporate events are as follows:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;