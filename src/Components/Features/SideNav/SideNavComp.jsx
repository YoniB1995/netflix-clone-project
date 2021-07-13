import React ,{useState}from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router , Route , Link, Switch} from 'react-router-dom'
import Home from '../Home';
import Devices from '../Devices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faAddressCard} from '@fortawesome/free-regular-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Register from '../Register/Register';
import { UserProvider } from '../Context';


export default function SideNavComp() {
    const style={background:"black",position:"sticky",width:"30px",height:"100%"}

      const [buttonPopup,setButtonPopup] = useState(false);
    
    
    return (
        <Router>
    <Route render={({ location, history }) => (
        <>
        <SideNav style={style}
    onSelect={(selected) => {
    const to = '/' + selected;
        if (location.pathname !== to) {
        history.push(to); }}}>
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="/MainPage">
        <NavItem eventKey="MainPage">
        <NavIcon>
        <img src="images/netflix_logo.png" alt="" height="40px" width="50px" />
        </NavIcon>
        <NavText>
        Welcome to Netflix App Clone
        </NavText>
        </NavItem>
        <NavItem eventKey="login">
        <NavIcon>
        <img src="images/netflix_user.png" alt="" height="40px" width="50px" />
        </NavIcon>
        <NavText>
        Register / Log In
        </NavText>
        </NavItem>
        <NavItem eventKey="mainPage">
        <NavIcon>
        <FontAwesomeIcon icon={faHospital} />
        </NavIcon>
        <NavText>
        Main Page
        </NavText>
        </NavItem>
        <NavItem eventKey="home">
        <NavIcon>
        <FontAwesomeIcon icon={faUserGraduate} />
        </NavIcon>
        <NavText onClick={()=> setButtonPopup(true)}>
        About Me
        </NavText>
        </NavItem>
        <NavItem eventKey="devices">
        <NavIcon>
        <FontAwesomeIcon icon={faHospital} />
        </NavIcon>
        <NavText>
        Devices
        </NavText>
        </NavItem>
        </SideNav.Nav>
        </SideNav>
            <main>
                <Route exact path="/"  />
                <Route path="/login" component={Register} />
                <Route path="/home"  component={Home} />
                <Route path="/devices" component={Devices} />
            </main>
        </>
    )}
    />
</Router>
    )
}
