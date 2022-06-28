//import { useState } from "react";

// object properties for ResourceCard passed down from DisplayContainer component

const ResourceCard = ({ title, url, content_type, topic }) => {
  /* code to set icon for content type - needs debugging
  
  const [icon, setIcon] = useState("");

  const handleType = (content_type) => {
    if (content_type === "video") {
      setIcon("📽");
    } else if (content_type === "article") {
      setIcon("📰");
    } else {
      setIcon("📝");
    }
    return icon;
  };*/

  return (
    <li className="resource-list-item">
      <div className="resource-content-wrapper">
        <div className="resource-content_type">
          <p>{content_type}</p>
        </div>
        <div className="resource-body">
          <h3 className="resource-title">
            <a
              className="main-link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </h3>
        </div>
        <div className="resource-footer">{topic}</div>
      </div>
    </li>
  );
};

export default ResourceCard;
