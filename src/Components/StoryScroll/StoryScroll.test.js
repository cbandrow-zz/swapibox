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
  it("renders the movie description", () => {});
  console.log(wrapper.find('.scroll'))
});
