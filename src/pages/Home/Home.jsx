import React, { useContext } from 'react'
import "./Home.scss"
import { Banner, BookShow, HomeLoader, Movies } from "../../Components"
import { MovieContext } from '../../context/moviecontext'

const Home = () => {

  const { loading } = useContext(MovieContext)

  if (loading) {
    return (<HomeLoader />)
  }
  return (
    <div className='home'>
      <Banner />
      <Movies />
    </div>
  )
}

export default Home
