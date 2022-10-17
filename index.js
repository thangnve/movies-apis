/**
 * @format
 */
import React, {Component, createElement} from 'react';
import {AppRegistry} from 'react-native';
import Slpash from './newuser/Slpash';

import Demo from './newuser/Demo';
import Login from './newuser/Login';
import {name as appName} from './app.json';
import Logup from './newuser/Logup';
import UserProfiling from './newuser/UserProfiling';
import ConfirmationProfile from './newuser/ConfirmationProfile';
import Home from './orderticket/Home';
import MainContainer from './navigation/MainContainer';
import Infomation from './orderticket/Infomation';
import Tabb from './navigation/Tabb';
import CinemaDate from './orderticket/CinemaDate';
import Dropdown from './orderticket/Dropdown';
import Seatempty from './orderticket/Seatempty';
import Checkoutwallet from './orderticket/Checkoutwallet';
import Succsess from './orderticket/Succsess';
import Ticketall from './myticket/Ticketall';
import TicketDetails from './myticket/TicketDetails';
import Walletall from './mywallet/Walletall';
import Topup from './mywallet/Topup';
import SuccsessTopup from './mywallet/SuccsessTopup';
import Profile from './myprofile/Profile';
import EditProfile from './myprofile/EditProfile';
import App from './App';
import picker from './myprofile/picker';







class Main extends Component {
    constructor(props){
        super(props);
        this.state = {currentSreen: 'Slpash'};
        setTimeout(() => {
            this.setState({currentSreen : 'Demo'})
        }, 3000)
    }
    render(){
    
        const {currentSreen} = this.state
        let mainSreen = currentSreen === 'Slpash' ? <Slpash/> : <Demo/>

        return mainSreen
           
        
       
    }
   
    
    

  
}

AppRegistry.registerComponent(appName, () => App);

