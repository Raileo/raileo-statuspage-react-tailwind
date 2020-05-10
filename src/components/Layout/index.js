import React from "react";
import Routing from '../Routing';
import Header from '../Header';
import Footer from "../Footer";
import ErrorBoundary from "../Errors/ErrorBoundary";

export default class Layout extends React.Component {
	render() {
		return (
			<ErrorBoundary>
				<Header />
				<div className="container max-w-2xl m-auto mt-10">
					<Routing />
					{this.props.children}
				</div>
				<Footer />
			</ErrorBoundary>
		)
	}
}