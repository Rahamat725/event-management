import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
           fetch('/service.json')
           .then(res => res.json())
           .then(service => setData(service))
    },[])
    return (
        <div className="">
            <h2 className="text-center text-3xl font-bold mt-10"><span className="text-[#eab917]"> Corporate Junction</span> Services</h2>
            <p className="text-xl text-center">We make your events smart & impactful by personalised event management services</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-4 ">
               {
                data.map(card => <ServiceCard key={card.id}  card={card}></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;