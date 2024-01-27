import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Table from "./components/Table";
function App() {
  const [data, setData] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // console.log(isNavbarOpen);
  const toggleNavbar = () => {
    // console.log("anuj");
    setIsNavbarOpen(!isNavbarOpen);
  };

  const getData = (data) => {
    // console.log(data);
    setData(data);
  };
  return (
    <>
      <div className="flex bg-[#fafafb] overflow-hidden  ">
        <div>
          {" "}
          <Sidebar
            isNavbarOpen={isNavbarOpen}
            toggleNavbar={toggleNavbar}
          ></Sidebar>
        </div>

        <div className={`w-full ${isNavbarOpen ? "hidden" : ""}`}>
          {" "}
          <Navbar toggleNavbar={toggleNavbar}></Navbar>
          <div className="flex justify-center h-[500px] w-full ">
            {" "}
            <Box getData={getData}></Box>
          </div>
          <div>
            <Table data={data}></Table>
          </div>
        </div>

        {/* <h1 className="text-3xl font-bold underline">Heallo world!</h1> */}
      </div>
    </>
  );
}

export default App;
