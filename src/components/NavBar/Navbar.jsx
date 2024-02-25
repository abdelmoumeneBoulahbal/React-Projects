/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Sling as Hamburger } from 'hamburger-react'


function Navbar(){
    
    /*const [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu);
    }
    */
    const [isClicked, setClicked] = useState(false);
    function handleChange(){
        setClicked((isClicked) => !isClicked);
    }
    
    return(
        <>
            <nav className={styles.navBar}>
                <h1>React</h1>
                <span className='fab fa-react'></span>
        
                {
                    isClicked ? (
                        <div className={styles.menu_container}>
                    <ul>                        
                        <li className={styles.nav_links}><a href='#'>Home</a></li>
                        <li className={styles.nav_links}><a href='#'>Services</a></li>
                        <li className={styles.nav_links}><a href='#'>Products</a></li>
                        <li className={styles.nav_links}><a href='#'>Contact Us</a></li>
                        <button className={styles.nav_links_signUp}>Sign Up</button>
                    </ul>
                </div>
                    ):(
                        <div className={styles.menu_container_after}>
                            <ul>                        
                                <li className={styles.nav_links}><a href='#'>Home</a></li>
                                <li className={styles.nav_links}><a href='#'>Services</a></li>
                                <li className={styles.nav_links}><a href='#'>Products</a></li>
                                <li className={styles.nav_links}><a href='#'>Contact Us</a></li>
                                <button className={styles.nav_links_signUp}>Sign Up</button>
                            </ul>   
                        </div>
                    )
                }
                       
                        
            </nav>
        </>
    );

}
export default Navbar