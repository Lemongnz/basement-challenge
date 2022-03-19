import type {NextPage} from "next";

import {store} from "../store";

import Nav from "./components/nav/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import GridProducts from "./components/grid-products";
import CarouselText from "./components/carousel-text";

const Home: NextPage = () => {
  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <div className="flex flex-col bg-black index" id="index">
      <header>
        <Nav />
      </header>
      <Header />
      <CarouselText />
      <GridProducts />

      <Footer />
    </div>
  );
};

export default Home;
