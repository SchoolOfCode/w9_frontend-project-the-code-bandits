import { useState } from 'react'
const ResourceCard = ({ title, url, content_type, topic }) => {
  const [icon, setIcon] = useState(null);

  const handleType = (content_type) => {
    if(content_type === 'video') {
      setIcon('📽')
    }
    else if(content_type === 'article') {
      setIcon('📰')
    }
    else {
      setIcon('📝')
    }
    return icon
  }

  return (
    <li>
      <a href={url} target="_blank" rel='noreferrer'>
        <div class="resource-content-wrapper">
          <div class="resource-header">
            {title}
            <p>{handleType(content_type)} type</p>
          </div>
          <div class="resource-body"></div>
          <div class="resource-content_type">{content_type}</div>
          <div class="resource-footer">{topic}</div>
        </div>
      </a>
    </li>
  );
};

export default ResourceCard;
