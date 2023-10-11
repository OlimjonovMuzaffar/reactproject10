import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function MainLayout() {
  return  (<div>
    <Navbar/>
    <main className="align-element py-8">
        <Outlet/>
    </main>
  </div>)
}

export default MainLayout;
