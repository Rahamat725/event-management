import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const Galary = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            
            <h2 className="md:text-3xl text-xl text-center  font-bold mb-10">
                <span className="text-[#eab917]"> Corporate Junction</span> Galary</h2>
          
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {
                data.map(galary => <div key={galary.id}> 
                <img src={galary.image} alt="" />
                </div>)
            }
         </div>
        </div>
    );
};

export default Galary;