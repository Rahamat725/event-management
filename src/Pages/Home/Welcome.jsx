

const Welcome = () => {
    return (
        <div className="mt-10 ">
            <h2 className="md:text-3xl text-xl text-center  font-bold">Welcome to
                <span className="text-[#eab917]"> Corporate Junction</span></h2>
            <p className="w-3/4 mt-4 mx-auto text-center">From Conferences and Seminars to Trade Shows and Expos or Team Building and Workshops Events to
                Corporate Meetings, Award Ceremonies We offer full range of Events Management Services that scale to your needs & budget.</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5 m-4">
                <div className="">
                    <h2 className=" text-center text-xl font-bold mb-4">Great Services</h2>
                    <p className="text-justify border-2 border-green-600 p-2">At Corporate Junction, we take pride in offering a comprehensive suite of corporate services designed to empower businesses to thrive and excel in today's dynamic market. With a wealth of expertise and a commitment to excellence, we are your trusted partner for all your corporate needs.</p>
                </div>
                <div>
                    <h2 className="text-center text-xl font-bold mb-4">Great People</h2>
                    <p className="text-justify border-2 border-green-600 p-2">Great people play a pivotal role in the success of corporate events. They are the driving force behind memorable and impactful gatherings that leave a lasting impression on attendees. Here's what makes these individuals essential to the world of corporate events:</p>
                </div>
                <div>
                    <h2 className="text-center text-xl font-bold mb-4">Great Ideas</h2>
                    <p className="text-justify border-2 border-green-600 p-2">Imagine a corporate event that sparks creativity, fosters collaboration, and propels your organization forward. The "Innovation Exchange Symposium" is precisely that—a groundbreaking corporate event designed to inspire fresh thinking, facilitate knowledge sharing, and accelerate innovation.</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;