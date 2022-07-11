import React from "react";
import { addArticles } from "./articlesSlice";
import useApi from "../../hooks/useApi";
import CardList from "../../components/cardlist/CardList";

export default function Articles() {
  const articlesList = useApi(
    "articles",
    addArticles,
    "https://api.spaceflightnewsapi.net/v3/articles"
  );

  return <CardList list={articlesList} />;
}
