import React from 'react';
import './index.css';
import ProfileCard from './ProfileCard.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import ProfileStats from './ProfileStats.jsx';
import SkillBadge from './SkillBadge.jsx';


function App() {
  const avatar =
    'https://upload.wikimedia.org/wikipedia/commons/7/77/Bola_Tinubu_portrait.jpg';

  return (
    <div className="app-shell">
      <ProfileCard>
        <div className="card-inner">
          <ProfileHeader name="Olufemi Awoyale" title="Senior Developer at Paystack" avatar={avatar} />

          <ProfileStats projects={45} followers={1200} following={300} />

          <section className="skills">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-list">
              <SkillBadge skill="React" level="Expert" />
              <SkillBadge skill="JavaScript" level="Expert" />
              <SkillBadge skill="CSS" level="Intermediate" />
              <SkillBadge skill="Node.js" level="Intermediate" />
              <SkillBadge skill="Figma" level="Beginner" />
            </div>
          </section>

          <div className="card-footer">
            <p className="tip">Tip: click any stat to highlight it. Hover a stat to see the hover color.</p>
          </div>
        </div>
      </ProfileCard>
    </div>
  );
}

export default App;