import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Banner from "./Banner";

import Welcome from "./Welcome";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Home;