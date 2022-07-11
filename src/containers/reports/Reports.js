import React from "react";
import { addReports } from "./reportsSlice";
import useApi from "../../hooks/useApi";
import CardList from "../../components/cardlist/CardList";

export default function Reports() {
  const reportsList = useApi(
    "reports",
    addReports,
    "https://api.spaceflightnewsapi.net/v3/reports"
  );

  return <CardList list={reportsList} />;
}
