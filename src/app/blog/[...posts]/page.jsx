import React from 'react'

const Posts = ({ params }) => {
    return (
        <>
            <h1>Posts with id : {params.posts}</h1>
        </>
    )
}

export default Posts