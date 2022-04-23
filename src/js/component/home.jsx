import React from "react";
import { Divnavbar } from "./divnavbar.jsx";
import { Divjumbo } from "./divjumbo.jsx";
import { Divfooter } from "./divfooter.jsx";
import { Divcard } from "./divcard.jsx";
import "../../styles/index.css";

const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<Divnavbar />
			<div className="container">
				<Divjumbo />
			</div>
			<div className="container">
				<Divcard />
			</div>
			<div className="container-fluid m-0 p-0">
				<Divfooter />
			</div>
		</div>
	);
};

export default Home;
