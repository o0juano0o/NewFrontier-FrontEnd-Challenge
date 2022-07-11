import React from "react";
import { addBlogs } from "./blogsSlice";
import useApi from "../../hooks/useApi";
import CardList from "../../components/cardlist/CardList";

export default function Blogs() {
  const blogsList = useApi(
    "blogs",
    addBlogs,
    "https://api.spaceflightnewsapi.net/v3/blogs"
  );

  return <CardList list={blogsList} />;
}
