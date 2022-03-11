import type { NextPage } from "next";
import Nav from "./components/nav/nav";

import Footer from "./components/footer";

const Home: NextPage = () => {
  return (
    <div id="index" className="flex flex-col bg-black index">
      <header>
        <Nav></Nav>
      </header>
      <div>Header</div>
      <div>Grid</div>
      <Footer />
    </div>
  );
};

export default Home;
