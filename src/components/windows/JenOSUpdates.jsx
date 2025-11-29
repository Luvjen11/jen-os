import React, { useEffect, useState } from 'react';
import '../../styles/JenOSUpdates.css';

const JenOSUpdates = ({ isNight }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest'); 

  const API_URL = "/api/dev-notes";

  useEffect(() => {
    fetch(API_URL)
    .then(async res => {
      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text.substring(0, 200));
        throw new Error("Response is not JSON");
      }

      return res.json();
    })
    .then(data => {
      setNotes(Array.isArray(data) ? data : []);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching updates:", err);
      setError(err.message);
      setLoading(false);
    });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get unique categories from notes
  const categories = ['all', ...new Set(notes.map(note => note.category || 'Other').filter(Boolean))];

  // Filter and sort notes
  const filteredAndSortedNotes = notes
    .filter(note => {
      if (selectedCategory === 'all') return true;
      return (note.category || 'Other') === selectedCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return sortOrder === 'newest' 
        ? dateB - dateA 
        : dateA - dateB;
    });

  if (loading) {
    return (
      <div className={`jenos-updates-window ${isNight ? "night-mode" : ""}`}>
        <div className="updates-loading">Loading JenOS Updates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`jenos-updates-window ${isNight ? "night-mode" : ""}`}>
        <div className="updates-error">
          <p>Unable to load updates</p>
          <small>{error}</small>
        </div>
      </div>
    );
  }

  return (
    <div className={`jenos-updates-window ${isNight ? "night-mode" : ""}`}>
      <h2 className="updates-title">JENOS UPDATES</h2>
      
      {/* Filters and Sort */}
      <div className="updates-controls">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="sort-controls">
          <button
            className={`sort-btn ${sortOrder === 'newest' ? 'active' : ''}`}
            onClick={() => setSortOrder('newest')}
          >
            Newest
          </button>
          <button
            className={`sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
            onClick={() => setSortOrder('oldest')}
          >
            Oldest
          </button>
        </div>
      </div>
      
      <div className="updates-list">
        {filteredAndSortedNotes.length === 0 ? (
          <div className="updates-empty">No updates found. Try a different filter.</div>
        ) : (
          filteredAndSortedNotes.map(note => (
            <div key={note.id} className="update-card">
              <div className="update-header">
                <div className="update-author">
                  <span className="author-name">jen</span>
                  
                </div>
                <span className={`update-tag tag-${note.category?.toLowerCase().replace(/\s+/g, '-') || 'other'}`}>
                  {note.category || 'UPDATE'}
                </span>
              </div>
              
              <div className="update-content">
                {note.title && (
                  <h3 className="update-title">{note.title}</h3>
                )}
                <p className="update-text">{note.content}</p>
                
                {note.imageUrl && (
                  <div className="update-image">
                    <img src={note.imageUrl} alt={note.title || 'Update image'} />
                  </div>
                )}
              </div>
              
              <div className="update-footer">
                <span className="update-date">{formatDate(note.date)}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JenOSUpdates;
