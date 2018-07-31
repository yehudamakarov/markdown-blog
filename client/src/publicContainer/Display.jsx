import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class Display extends Component {
  render() {
    return (
      <div>
        <Route path={`/tags/:tag`} render={(routeProps) => 
            <div>
                <h1>Posts By Tag</h1>
                <p>{routeProps.match.url}</p>
                <p>{routeProps.match.path}</p>
            </div>
        } />
      </div>
    )
  }
}
