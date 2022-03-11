import type { NextPage } from "next";
import Nav from "./components/nav/nav";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-black index ">
      <header className="m-auto text-white text-center">
        <Nav></Nav>
      </header>
      <div>Header</div>
      <div>Grid</div>
    </div>
  );
};

export default Home;
