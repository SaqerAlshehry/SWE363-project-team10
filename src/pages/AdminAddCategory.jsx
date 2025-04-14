import React, { useState } from 'react';
import TextField from '../components/TextField';
import '../styles/AdminAddCategory.css';

function AdminAddCategory() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Item posted!');
    };

    return (
        <div className="post-page">
            <div className="post-container">
                <form onSubmit={handleSubmit} className="post-form">
                    <TextField label="Category Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AdminAddCategory;