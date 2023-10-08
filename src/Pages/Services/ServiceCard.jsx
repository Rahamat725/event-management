import { Link } from "react-router-dom";


const ServiceCard = ({card}) => {
    const {id,image,name,price,description} = card;
    return (
        <div>
            <div className="card w-96 bg-gray-300 shadow-xl mx-auto">
  <div>
  <figure><img src={image} alt="Shoes" /></figure>
  <span className="text-xl bg-amber-700 text-white  relative bottom-8 p-2 rounded-lg">${price}</span>
  {/* bg-[#eab917] */}
  </div>
  <div className="card-body  rounded-b">
    <h2 className="card-title">{name}</h2>
    <div>
        {
              description.length>200 ? 
              <p>{description.slice(0,200)}
              <Link className="text-blue-700 font-bold text-justify"
              to={`/serviceDetails/${id}`}> Know More...</Link></p>
              : <p>{description}</p>
        }
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;