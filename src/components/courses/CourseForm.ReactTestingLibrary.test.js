import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

// unlike enzyme, react testing library does not distinguish between shallow and mount. Components are always mounted
// unlike enzyme, you don't need to call expect. With RTL the assertion is part of your query
// react testing library focusses on what the user sees and it requires less code.

// run after each test

afterEach(cleanup);

// add in afactory that will create  our component

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("should label 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label 'Saving..' when saving", () => {
  const { getByText } = renderCourseForm({ saving: true }); // set saving to true to overwrite the default stting above
  getByText("Saving...");
});
