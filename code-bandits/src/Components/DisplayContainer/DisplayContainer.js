import ResourceCard from "../ResourceCard/ResourceCard";

// resourceList state is passed down from App component via props
// function maps through each resource and assigns property values to ResourceCard
// displays ResourceCard in <ul> element

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
