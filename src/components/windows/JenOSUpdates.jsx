import React, { useEffect, useState } from 'react';
import '../../styles/JenOSUpdates.css';

const JenOSUpdates = ({ isNight }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <h2 className="updates-title">JENOSUPDATES</h2>
      
      <div className="updates-list">
        {notes.length === 0 ? (
          <div className="updates-empty">No updates yet. Check back soon!</div>
        ) : (
          notes.map(note => (
            <div key={note.id} className="update-card">
              <div className="update-header">
                <div className="update-author">
                  <div className="author-icon">@</div>
                  <span className="author-name">jen</span>
                </div>
                <span className={`update-tag tag-${note.category?.toLowerCase().replace(/\s+/g, '-') || 'other'}`}>
                  {note.category || 'UPDATE'}
                </span>
              </div>
              
              <div className="update-content">
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
