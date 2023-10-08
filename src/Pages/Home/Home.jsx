
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Banner from "./Banner";
import Review from "./Review";

import Welcome from "./Welcome";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Review></Review>
           <Footer></Footer>
           <div>
           
           </div>
        </div>
    );
};

export default Home;