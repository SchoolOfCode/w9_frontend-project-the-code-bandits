const ResourceCard = ({ title, url, content_type, topic }) => {
  return (
    <li>
      <a href={url} target="_blank">
        <div class="resource-content-wrapper">
          <div class="resource-header">
            {title}
            <p>[icon] type</p>
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
