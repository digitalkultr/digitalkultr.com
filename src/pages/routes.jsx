import React from "react";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";

import { 
	BrowserRouter,
	Route,
	Routes 
} from "react-router-dom";

const RoutesList = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesList