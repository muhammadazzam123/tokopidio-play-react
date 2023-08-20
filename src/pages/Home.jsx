import FilterVideo from "../components/FilterVideo";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import VideoList from "../components/VideoList";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <VideoList />
    </div>
  );
};

export default Home;
