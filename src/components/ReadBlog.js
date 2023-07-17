import React, { useEffect, useState } from 'react';

const ReadBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Make an HTTP GET request to fetch all blog posts
        fetch('http://localhost:8080/blogs')
            .then((response) => response.json())
            .then((data) => {
                // Update the component state with the received data
                setBlogs(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p>Tags: {blog.tags.join(', ')}</p>
                    <button>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default ReadBlog;
