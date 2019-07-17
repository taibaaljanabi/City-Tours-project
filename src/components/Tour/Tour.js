import React, { Component } from 'react';
import './Tour.scss'

class Tour extends Component {
    render() {
        return (
            <article className='tour'>
            <div className='img-container'>
            <img  src='https://images.pexels.com/photos/935863/pexels-photo-935863.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt=''/>

            <span className='close-btn'>
            <i className= 'fas fa-window-close'/>
            </span>
            </div>
            <div className='tour-info'>
            <h3>City</h3>
            <h4>Name</h4>
            <h5>info<span><i className='fas fa-caret-square-down' />  </span>
            </h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>


            </div>
               
            </article>
        );
    }
}

export default Tour;