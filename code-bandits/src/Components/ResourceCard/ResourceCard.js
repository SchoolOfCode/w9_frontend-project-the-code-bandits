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
        <div className="resource-content-wrapper">
          <div className="resource-header">
            {title}
            <p>{handleType(content_type)} type</p>
          </div>
          <div className="resource-body">
            <h3 className='resource-title'>{title}</h3>
            <p className='resource-description'>Click on the <a href="https://www.freecodecamp.org/news/git-diff-command/" target="_blank" rel="noreferrer">freecodecamp link on git diff commands</a> for more information</p>
          </div>
          <div className="resource-content_type">{content_type}</div>
          <div className="resource-footer">{topic}</div>
        </div>
      </a>
    </li>
  );
};

export default ResourceCard;
