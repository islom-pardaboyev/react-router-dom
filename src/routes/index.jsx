import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Agents, Articles, Contact, Ideas, Overview, Settings, NotFound, Subscription, Tickets} from '../pages'

function CustomRoute() {
  return (
    <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/tickets' element={<Tickets/>} />
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/settings' element={<Settings/>} />
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default CustomRoute