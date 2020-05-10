import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from  '../../pages/Home';
import NotFound from '../../pages/404';
import Incidents from '../../pages/incidents';
import SingleIncident from '../../pages/incidents/SingleIncident';

class Routing extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/incidents" component={Incidents} exact/>
				<Route path="/incidents/:id" component={SingleIncident} exact/>
				<Route component={NotFound} />
			</Switch>
		)
	}
}

export default withRouter(Routing);
