import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Welcome from "./Welcome";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <h2>This is Home page</h2>
        </div>
    );
};

export default Home;