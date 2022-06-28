import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ResourceCard from "./ResourceCard";

const resource = {
  id: 1,
  title: "This is a title",
  url: "www.url.com",
  content_type: "video",
  topic: "React",
};

test("Resource Card component renders successfully", function () {
  render(
    <ResourceCard
      id={resource.id}
      title={resource.title}
      url={resource.url}
      topic={resource.topic}
    />
  );

  expect(screen.getByRole("listitem")).toBeInTheDocument();
});
