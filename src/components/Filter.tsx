// Filter.js
import React, { useState } from 'react';
import '../styles/Filter.scss';

type FilterProps = {
    onFilterChange: (filter: string) => void;
};

function Filter({ onFilterChange }: FilterProps) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="filter-section">
            <h2>Filter Blogs</h2>
            <ul className="filter-options">
                <li className={selectedFilter === 'All' ? 'active' : ''} onClick={() => handleFilterChange('All')}>
                    All
                </li>
                <li className={selectedFilter === 'JavaScript' ? 'active' : ''} onClick={() => handleFilterChange('JavaScript')}>
                    JavaScript
                </li>
                <li className={selectedFilter === 'React' ? 'active' : ''} onClick={() => handleFilterChange('React')}>
                    React
                </li>
                <li className={selectedFilter === 'Node.js' ? 'active' : ''} onClick={() => handleFilterChange('Node.js')}>
                    Node.js
                </li>
            </ul>
        </div>
    );
}

export default Filter;
