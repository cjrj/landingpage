import React from "react";

export const Divcard = () => {
	return (
		/*<div className="card">
			<img
				src="https://picsum.photos/200"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
			</div>
		</div>*/

		<div className="card" /*style="width: 18rem;"*/>
			<img
				src="https://picsum.photos/200"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
