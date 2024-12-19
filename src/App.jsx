import { useState } from 'react'
import Topbar from './components/Topbar'
import Content from './components/Content'
import SearchBar from './components/Searchbar'
import './App.css' 

function App() {

  return (
    <div className='body'>
      <Topbar />
      {/* <SearchBar/> */}
      <Content/>
    </div>
  )
}

export default App
