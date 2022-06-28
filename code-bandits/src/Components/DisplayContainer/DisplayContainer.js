import ResourceCard from "../ResourceCard/ResourceCard";

const DisplayContainer = ({ resourceList }) => {
  return (
    <ul className="resource-content-list">
      {resourceList.map((item) => (
        <ResourceCard
          key={item.id}
          title={item.title}
          url={item.url}
          content_type={item.content_type}
          topic={item.topic}
        ></ResourceCard>
      ))}
    </ul>
  );
};
export default DisplayContainer;
