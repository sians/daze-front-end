import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import UploadPage from '../pages/UploadPage'


const Router = ({ setRoutePathName }) => {
    const location = useLocation()

    return (
        <Switch location={location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/upload" exact component={UploadPage} />
            <Route path="/gallery" exact component={HomePage} />
            <Redirect from="*" to="/" />
        </Switch>
    )
  }
  
  export default Router