import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "./HomeLoader.scss"

const HomeLoader = () => {
    return (
        <div className='home-loader'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}

export default HomeLoader
