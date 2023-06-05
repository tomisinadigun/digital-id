import React from 'react'
import './App.css'
import Location from './components/Location'
import UserImg from './components/UserImg'
import UserInfo from './components/UserInfo'
import Button from './components/Button'
import CardFooter from './components/CardFooter'
import userArray from './components/Users'

import profilepicture from "./assets/profilepicture.svg"

function App() {
  
  return (
    <>
      <div className='ids-container'>
        {
          userArray.map((item) => {
            return (
              <div className="id-card">
                <div className="id-card-inner">
                  <Location loc={item.location} />
                  <UserImg userImage={profilepicture} />
                  <UserInfo firstname={item.firstname} lastname={item.lastname} descript={item.description} />
                  <Button following= {item.following} />
                </div>
                <div className="card-footer">
                  <CardFooter posts={item.posts} favorites={item.favorites} messages={item.messages} />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
