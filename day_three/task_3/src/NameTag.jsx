import { useState } from "react";

function NameTag() {
  const [name, setName] = useState("Olufemi Awoyale");
  const [title, setTitle] = useState("Ai Developer");
  const [company, setCompany] = useState("Google"); 
const handleDownload = () => {
    alert(`--- NAME TAG ---
    Hello, my name is
    ${name.toUpperCase()}
    ${title}
    ${company}`);
    };

  return (
    <div className="name-tag">
        <input
         placeholder="FullName" 
         type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
            placeholder="Title"  
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
         placeholder="Company"  
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
        />
      <h1>Full Name: {name}</h1>
      <h2>Title: {title}</h2>
      <h3>Company: {company}</h3>
      <div>
      <button className="btn" onClick={handleDownload}>
        Download
      </button>
      </div>
    </div>
  );
}
export default NameTag;