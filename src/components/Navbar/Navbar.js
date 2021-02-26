import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import {VscChromeClose, VscMenu} from 'react-icons/vsc'
import img from '../../assets/img/agro.jpg'

const navbarLinks = [
    {path:'/', name:'МОИ ТОВАРЫ'},
    {path:'/search', name:'Начат поиск'},
    {path:'/contact', name:'СВЯЗ'},
    {path:'/cLicked', name:'Избранний'},
    {path:'/settings', name:'Настройки'},
]

function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [clicked, setclicked] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if(window.scrollY > 500){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    const navbarDesktop = () => {
        return(
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.logo} style={{backgroundImage: `url(${img})`}}>

                    </div>
                    <div className={style.links}>
                        {
                            navbarLinks.map((link, index) => {
                                return(
                                    <Link key={index} to={link.path}>
                                        {link.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    const navbarMobile =() => {
        return(
            <div className={style.mainPhone}>
                <div className={style.containerPhone}>
                    <div className={style.logo} style={{backgroundImage: `url(${img})`}}>

                    </div>
                    {clicked ? <VscChromeClose onClick={() => setclicked(false)}/> : <VscMenu onClick={() => setclicked(true)}/>}
                </div>
                <div className={clicked ? `${style.linksPhone} ${style.clicked}` : `${style.linksPhone} ${style.nonclicked}`}>
                    {
                        navbarLinks.map((link, index) => {
                            return(
                                <Link key={index} to={link.path}>
                                    {link.name}                                   
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            {navbarDesktop()}
            {navbarMobile()}
        </div>
    )
}

export default Navbar
