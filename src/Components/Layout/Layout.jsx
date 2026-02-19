// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import { useState } from "react";
// import styles from "./Layout.module.css"

// function Layout() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="app">
//       <Navbar toggle={() => setOpen(!open)} />
//       <div className="main">
//         <Sidebar open={open} />
//         <div className="content">
//           <Outlet />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import styles from "./Layout.module.css";

function Layout() {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="app">
        <Navbar toggle={() => setOpen(!open)} open={open} /> 
        <div className="main">
          <Sidebar open={open} />
          <div className="content">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default Layout;