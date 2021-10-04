import Anuncios from "../../components/anuncios/Anuncios";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Anuncios />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
