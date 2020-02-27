import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [movie, setMovie] = useState([]);

	function getApi() {
		fetch("https://swapi.co/api/films/" + props.match.params.theid.toString(), {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})
			.then(resp => resp.json())
			.then(data => {
				setMovie(data);
				console.log("getApi", data);
			});
	}
	useEffect(() => {
		getApi();
	}, []);

	return (
		<div className="jumbotron">
			<hr className="my-4" />

			<div className="container">
				<p className="text-left bg-light">
					<b>Title: </b>
					{movie.title}
				</p>
				<p className="text-left bg-light">
					<b>Director: </b>
					{movie.director}
				</p>
				<p className="text-left bg-light">
					<b>Producer: </b>
					{movie.producer}
				</p>
				<p className="text-justify bg-light">
					<b>Opening crawl:</b>
					{movie.opening_crawl}
				</p>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
