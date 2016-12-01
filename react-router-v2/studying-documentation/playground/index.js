// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import App from './modules/App'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
// import Home from './modules/Home'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, Redirect } from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const Dashboard = React.createClass({
    render() {
        return <div>Dashboard</div>
    }
})

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div style={{border: 'red 1px solid'}}>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Redirect from="about" to="inbox" />
            <Route path="inbox" onEnter={()=>{console.log('on Enter')}}component={Inbox} >
                <Route component={Inbox} >
                    <Route path="messages/:id" component={Message} />
                </Route>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home}/>
//       <Route path="/repos" component={Repos}>
//         <Route path="/repos/:userName/:repoName" component={Repo}/>
//       </Route>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))


