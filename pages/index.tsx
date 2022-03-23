import type {NextPage} from "next";
import {useState} from "react";

import Nav from "./components/nav/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import GridProducts from "./components/grid-products";
import CarouselText from "./components/carousel-text";
import {IProduct} from "./types/product.type";
import productsService from "./services/products.service";

const Home: NextPage = () => {
  const [products, setProducts] = useState([] as IProduct[]);

  productsService.getAll().then((responseProducts: IProduct[]) => {
    if (!products?.length) {
      // Hay que averiguar o preguntar para sacar esta linea sin que entre en bucle
      setProducts(responseProducts);
    }
  });

  return (
    <div className="flex flex-col bg-black index" id="index">
      <header>
        <Nav />
      </header>
      <Header />
      <CarouselText />
      <GridProducts products={products} />
      <Footer />
    </div>
  );
};

export default Home;
