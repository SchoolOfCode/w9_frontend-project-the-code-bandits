import ResourceCard from "../ResourceCard/ResourceCard";

const DisplayContainer = ({ resourceList }) => {
  return (
    <div>
      {resourceList.map((item) => (
        <ResourceCard
          key={item.id}
          title={item.title}
          url={item.url}
          contentType={item.content_type}
          topic={item.topic}
        ></ResourceCard>
      ))}
    </div>
  );
};
export default DisplayContainer;
