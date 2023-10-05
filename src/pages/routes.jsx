import React from "react";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Under_Construction from "./under_construction_page.jsx";
import { 
	BrowserRouter,
	Route,
	Routes 
} from "react-router-dom";
import Insights from "./insights/Insights.jsx";

const RoutesList = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/insight" element={<Insights/>}/>
				<Route path="/under" element={<Under_Construction/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesList