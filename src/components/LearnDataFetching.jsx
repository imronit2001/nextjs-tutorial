"use client"
import React, { useEffect, useState } from 'react';

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}

const LearnDataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);

    return (
        <>
            {posts.map((post, i) => (
                <div key={i}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </>
    );
};

export default LearnDataFetching;
