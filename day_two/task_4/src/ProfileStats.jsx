import React, { useState } from 'react';
import './index.css';

function ProfileStats({ projects = 0, followers = 0, following = 0 }) {
  const [active, setActive] = useState(null);

  const items = [
    { key: 'projects', label: 'Projects', value: projects },
    { key: 'followers', label: 'Followers', value: followers },
    { key: 'following', label: 'Following', value: following },
  ];

  function format(v) {
    if (v >= 1000000) return (v / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1).replace('.0', '') + 'K';
    return String(v);
  }

  return (
    <div className="stats-row">
      {items.map((it) => {
        const isActive = active === it.key;
        return (
          <button
            key={it.key}
            type="button"                         // <-- fixed: explicitly set button type
            onClick={() => setActive(isActive ? null : it.key)}
            className={`stat-button ${isActive ? 'active' : ''}`}
            aria-pressed={isActive}
            title={`Click to toggle ${it.label}`}
          >
            <span className="stat-label">{it.label}:</span>
            <span className="stat-value">{format(it.value)}</span>
          </button>
        );
      })}
    </div>
  );
}
export default ProfileStats;