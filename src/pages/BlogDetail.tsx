// BlogDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/data';
import '../styles/BlogDetail.scss';

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find(blog => blog.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-category">Category: {blog.category}</p>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
}

export default BlogDetail;
