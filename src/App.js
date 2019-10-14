import React,{Component} from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import { Menu, Icon , Carousel} from 'antd';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

const { SubMenu } = Menu;

export default class App extends Component {
    
    
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                </Switch>
                
            </BrowserRouter>
        )
           
    }
}
