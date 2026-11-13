import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'
import Page1Content from './components/Section1/Page1Content'

const App = () => {
  const users = [
    {
      img :'https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : '',
      tag : 'Satisfied'
    },
    {
      img :'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : '',
      tag : 'Underserved'
    },
    {
      img :'https://images.unsplash.com/photo-1773332598414-44a45e364d85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : '',
      tag : 'Underbanked'
    },
    {
      img :'https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : '',
      tag : 'average'
    }
  ]
  return (
    <div className=''>
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
