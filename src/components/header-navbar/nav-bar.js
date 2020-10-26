import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className='navBar__link' key={index} onClick={() => console.log('tring to switch tab')}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}
NavBar = connect(mapStateToProps)(NavBar);

export default NavBar;