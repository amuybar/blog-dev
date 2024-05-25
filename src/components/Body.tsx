import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Body.scss';
import { BlogData } from '../data/data';

interface BodyProps {
    filteredPosts: BlogData[];
}

const POSTS_PER_PAGE = 6; 

function Body({ filteredPosts }: BodyProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleBlogClick = (slug: string) => {
        navigate(`/blog/${slug}`);
    };

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="blog-container">
            <div className="blog-list">
                {paginatedPosts.map((blog) => (
                    <div className="blog-card" key={blog.slug} onClick={() => handleBlogClick(blog.slug)}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h2 className="blog-title">{blog.title}</h2>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            
        </div>
    );
}

export default Body;
