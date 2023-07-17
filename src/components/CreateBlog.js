import React, { useState } from 'react';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make an HTTP POST request to create a new blog post
        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, tags }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data as needed
                console.log(data);
                // Reset form fields
                setTitle('');
                setContent('');
                setTags('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label>Tags (separated by comas):</label>
                    <input type="text" value={tags} onChange={(e) => setTags(e.target.value.split(','))} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateBlog;
