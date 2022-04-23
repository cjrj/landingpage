import React from "react";
import "../../styles/index.css";
import vivienda from "../../img/vivienda.jpg";
import rio from "../../img/rio.jpg";
import mountain from "../../img/mountain.jpg";
import playa from "../../img/playa.jpg";

export const Divcard = () => {
	return (
		<div className="container d-flex flex-row flex-nowrap justify-content-between">
			<div className="card m-2 d-flex flex-column">
				<img src={mountain} className="card-img-top" alt="..."></img>
				<div className="card-body d-flex flex-column align-items-center justify-content-between">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Maecenas nec nisi et mi finibus pellentesque. Nullam
						convallis euismod est, sed vulputate elit gravida vel.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-2 d-flex flex-column">
				<img src={vivienda} className="card-img-top" alt="..."></img>
				<div className="card-body d-flex flex-column align-items-center justify-content-between">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Nullam ut metus eget felis euismod rutrum. Nullam
						consectetur tempus leo, quis pharetra mauris.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-2 d-flex flex-column">
				<img src={playa} className="card-img-top" alt="..."></img>
				<div className="card-body d-flex flex-column align-items-center justify-content-between">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Nullam malesuada placerat ultrices. Morbi euismod magna
						ut scelerisque fringilla. Fusce bibendum ligula.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
			<div className="card m-2 d-flex flex-column">
				<img src={rio} className="card-img-top" alt="..."></img>
				<div className="card-body d-flex flex-column align-items-center justify-content-between">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Nullam malesuada placerat ultrices. Morbi euismod magna
						ut scelerisque fringilla. Fusce bibendum ligula.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};
