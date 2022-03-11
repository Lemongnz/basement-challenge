import type {NextPage} from "next";

import Nav from "./components/nav/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import GridProdcts from "./components/grid-products";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-black index">
      <header className="m-auto text-white text-center">
        <Nav />
      </header>
      <Header />
      <GridProdcts />
      <Footer />
    </div>
  );
};

export default Home;
