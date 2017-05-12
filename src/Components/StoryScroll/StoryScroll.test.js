import React from "react";
import ReactDOM from "react-dom";
import StoryScroll from "./StoryScroll.js";
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockFilm from "../Stubs/FilmData.json";
import Helper from "../Helpers/helper.js";

describe("scroll", () => {
  const wrapper = shallow(
    <StoryScroll scrollData={mockFilm}
    errorStatus={""} />
  );

  it("renders the movie title", () => {
    expect(wrapper.find(".movieTitle").length).toEqual(1)
  });

  it("renders the movie release date", () => {
    expect(wrapper.find(".movieRelease").length).toEqual(1)
  });

  it("renders the movie description", () => {
    expect(wrapper.find(".movieCrawl").length).toEqual(1)
  });


});
