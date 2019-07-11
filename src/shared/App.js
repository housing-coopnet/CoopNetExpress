import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch, Redirect } from 'react-router-dom'
import NoMatch from './NoMatch'
import NavHeader from './components/NavHeader.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.redirect = props.redirect
  }

  BrowserRedirect() {
    if (this.props.redirect) {
      return <Redirect to={this.props.redirect} />
    }
  }

  render() {
    return (
      <div>
        <BrowserRedirect />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
      </div>
    )
  }
}

export default App