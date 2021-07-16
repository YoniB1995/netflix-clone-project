import React ,{useState,useContext}from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router , Route , Link, Switch} from 'react-router-dom'
import Home from '../Home';
import Devices from '../Devices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faAddressCard} from '@fortawesome/free-regular-svg-icons'
import { faUserGraduate,faGlassCheers, faMedal, faExternalLinkAlt, faRadiation, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import Register from '../Register/Register';
import UserContext, { UserProvider } from '../Context';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

export default function SideNavComp(props) {
    const style={background:"black",position:"sticky",width:"30px",height:"100%"}

     const setIsContainer = props.setIsContainer
    
    return (
        <>
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
        Welcome to my App
        </NavText>
        </NavItem>
        <NavItem eventKey="MainPage">
        <NavIcon>
        <img src="images/netflix_user.png" alt="" height="40px" width="50px" />
        </NavIcon>
        <NavText>
        Welcome , Yoni Bitew
        </NavText>
        </NavItem>
        <NavItem eventKey="netflixoriginal">
        <NavIcon>
        <FontAwesomeIcon icon={faAngellist} />
        </NavIcon>
        <NavText>
        Netflix Original
        </NavText>
        </NavItem>
        <NavItem eventKey="trendingnow">
        <NavIcon>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        </NavIcon>
        <NavText>
        Trending Now
        </NavText>
        </NavItem>
        <NavItem eventKey="toprated">
        <NavIcon>
        <FontAwesomeIcon icon={faMedal} />
        </NavIcon>
        <NavText>
        Top Rated
        </NavText>
        </NavItem>
        <NavItem eventKey="actionmovies">
        <NavIcon>
        <FontAwesomeIcon icon={faRadiation} />
        </NavIcon>
        <NavText>
        Action
        </NavText>
        </NavItem>
        <NavItem eventKey="comedymovies">
        <NavIcon>
        <FontAwesomeIcon icon={faTheaterMasks} />
        </NavIcon>
        <NavText>
        Comedy
        </NavText>
        </NavItem>
        </SideNav.Nav>
        </SideNav>
            
        </>
    )}
    />
</>
    )
}
