import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import  './Header.css';
import SideDrawer from "../SideDrawer/SideDrawer";


class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false,
        bgHeight: window.innerHeight
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }


    toggleDrawer = bool => {
        this.setState({
            drawerOpen: bool
        });
    };

    handleScroll = () => {
        if(window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    };


    render() {

        const { headerShow, drawerOpen} = this.state;

        return (
            <AppBar
            position={'fixed'}
            style={{
                backgroundColor: headerShow ? '#2f2f2f': 'rgba(47, 47, 47, 0.3)',
                padding: '10px 0'
            }}
            >
                <Toolbar>
                    <div className={'header_logo'}>
                        <div className={'header_logo_meeting'}>FrontEnd Istanbul</div>
                        <div className={'header_logo_title'}>FrontEnd Developer MeetUp</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={drawerOpen}
                        onClose={(bool) => this.toggleDrawer(bool)}
                    />
                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;