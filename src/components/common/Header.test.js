import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// with shallow render, a react tag can be searched for
it("contains 3 Navlinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// with mount, you search for the final rendered HTML since it generates the fianl DOM
// we also need to pull the React Router's Memory Router since the header expects to have React Router's props passed in
// a full DOM is created in memory  behind the scenes, so the NavLink is ultimately rendered into an <a> tag, that is why an achor tag is searched
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
      <MemoryRouter>
      <Header/>
      </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toEqual(3);
});
