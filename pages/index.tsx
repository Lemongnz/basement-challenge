import type { NextPage } from "next";

import Nav from "./components/nav/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import GridProducts from "./components/grid-products";

const Home: NextPage = () => {
  return (
    <div id="index" className="flex flex-col bg-black index">
      <header>
        <Nav></Nav>
      </header>
      <Header />
      <GridProducts />
      <Footer />
    </div>
  );
};

export default Home;
