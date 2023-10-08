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
            <h2>This is Home page</h2>
        </div>
    );
};

export default Home;