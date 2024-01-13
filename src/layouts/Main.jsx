// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";
import wave2 from "../assets/wave2.svg";
import wave3 from "../assets/wave3.svg";
import wave4 from "../assets/wave4.svg";

// components
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img className="wave" src={wave4} alt="" />
    </div>
  )
}
export default Main