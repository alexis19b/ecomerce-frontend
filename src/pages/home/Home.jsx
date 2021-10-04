import Anuncios from "../../components/anuncios/Anuncios";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Anuncios />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
