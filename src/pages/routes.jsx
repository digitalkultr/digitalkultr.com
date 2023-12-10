import React from "react";
import Home from "./home/Home.jsx";
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
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesList