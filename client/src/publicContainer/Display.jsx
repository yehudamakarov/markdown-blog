import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class Display extends Component {
    
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.url === '/' ? '' : match.url}/tags/:tag`} render={(routeProps) => 
            <div>
                <h1>Posts By Tag</h1>
                <p>{routeProps.match.url}</p>
                <p>{routeProps.match.path}</p>
            </div>
        } />
        <Route exact path={`${match.url}`} render={(routeProps) => 
            <div>
                <h1>Post Index</h1>
                <p>{routeProps.match.url}</p>
                <p>{routeProps.match.path}</p>
            </div>
        } />
      </div>
    )
  }
}
