import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import './Header.css'
import axios from 'axios'

const Header = () => {
  const [user, setUser]= useState({})

  useEffect(()=>{
    axios.get("https://api.github.com/users/devCluna")
    .then(item => {
      setUser(item.data)
    })
  },[])

  return (
    <div className='header'>
        <FaBars className='menu-icon menu-bar'/>
        <SiGithub className='menu-icon menu-logo'/>
        <div className='input-holder'>
            <input className='input-header' placeholder="Search by username"/>
            <div className='search-results'>
              <p>dalas</p>
              <p>joaquin</p>
            </div>
        </div>
        <div className="userInfo-holder">
            <img className='userImg' src={user.avatar_url}/>
            <div className="userInfo"> 
                <p>{user.name}</p>
                <p>@{user.login}</p>
            </div>
        </div>
    </div>
  )
}

export default Header