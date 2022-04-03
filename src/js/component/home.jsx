import React from "react";
import { Divnavbar } from "./divnavbar.jsx";
import { Divjumbo } from "./divjumbo.jsx";
import { Divcard } from "./divcard.jsx";
import { Divfooter } from "./divfooter.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Divnavbar />
			<Divjumbo />
			<Divcard />
			<Divfooter />
		</div>
	);
};

export default Home;
