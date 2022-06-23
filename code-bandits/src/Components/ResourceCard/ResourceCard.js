import { useState } from "react";
const ResourceCard = ({ title, url, content_type, topic }) => {
  const [icon, setIcon] = useState(null);

  const handleType = (content_type) => {
    if (content_type === "video") {
      setIcon("📽");
    } else if (content_type === "article") {
      setIcon("📰");
    } else {
      setIcon("📝");
    }
    return icon;
  };

  return (
    <li className="resource-list-item">
      <div className="resource-content-wrapper">
        <div className="resource-header">
          {title}
          <p>
            {() => {
              handleType(content_type);
            }}
            type
          </p>
        </div>
        <div className="resource-body">
          <h3 className="resource-title">
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
        </div>
        <div className="resource-content_type">{content_type}</div>
        <div className="resource-footer">{topic}</div>
      </div>
    </li>
  );
};

export default ResourceCard;
