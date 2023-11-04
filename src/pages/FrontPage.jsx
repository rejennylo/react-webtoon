import { Banner } from "../components/Banner";
import { Daily } from "../components/Daily";
import { Genres } from "../components/Genres";
import { Ranking } from "../components/Ranking";
import { IsNew } from "../components/IsNew";

export const FrontPage = () => {
  return (
    <>
      <Banner />
      <Daily />
      <IsNew />
      <Genres />
      <Ranking />
    </>
  );
};
