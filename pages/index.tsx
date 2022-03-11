import type {NextPage} from "next";

import Nav from "./components/nav/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import GridProducts from "./components/grid-products";

const Home: NextPage = () => {
  return (
<<<<<<< HEAD
    <div id="index" className="flex flex-col bg-black index">
      <header>
        <Nav></Nav>
=======
    <div className="flex flex-col bg-black index">
      <header className="m-auto text-white text-center">
        <Nav />
>>>>>>> 7727bbc6354bf61cdabed4f543c9c5915c24127e
      </header>
      <Header />
      <GridProducts />
      <Footer />
    </div>
  );
};

export default Home;
