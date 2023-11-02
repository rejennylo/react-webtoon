import { Banner } from "../components/Banner";
import { Daily } from "../components/Daily";
import { Genres } from "../components/Genres";
import { Scroll } from "../components/Scroll";

export const FrontPage = () => {
  return (
    <>
      <Banner />
      <Daily />
      <Scroll />
      <Genres />
    </>
  );
};
