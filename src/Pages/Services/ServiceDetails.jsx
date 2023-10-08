import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const ServiceDetails = () => {
    const details = useLoaderData();
    console.log(details)
    const {id} = useParams();
    console.log("paramas", id)
    const data = details.find(findData => findData.id ===id);
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 p-2">
                
                <img className="h-[500px] w-full rounded-xl" src={data.image} alt="" />
                <h2 className="text-2xl mt-10">{data.title}</h2>
                <p className="mt-4 text-justify">{data.description}</p>
            </div>
            <div className="text-center mt-5 mb-10">
                <button className="btn bg-amber-700">Book for ${data.price}</button>
                </div>
        </div>
    );
};

export default ServiceDetails;