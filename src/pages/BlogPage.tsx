// BlogPage.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Body from '../components/Body';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import '../styles/BlogPage.scss';
import blogData, { BlogData } from '../data/data';




function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState<BlogData[]>(blogData);

  const handleFilterChange = (filter: string) => {
    if (filter === 'All') {
      setFilteredPosts(blogData);
    } else {
      setFilteredPosts(blogData.filter(post => post.category === filter));
    }
  };

  return (
    <div className='blog-page'>
      <NavBar />
      <div className="container">
        <Filter onFilterChange={handleFilterChange} />
        <Body filteredPosts={filteredPosts} />
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
