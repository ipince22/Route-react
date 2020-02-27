import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
				<li data-target="#carouselExampleIndicators" data-slide-to="1" />
				<li data-target="#carouselExampleIndicators" data-slide-to="2" />
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
						alt="First slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
						alt="Second slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
						alt="Third slide"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
