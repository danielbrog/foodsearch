import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../components/HomePage'

const AppRouter = () => (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>

)

export default AppRouter