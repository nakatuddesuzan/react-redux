import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSucess(courses) {
  return { type: types.LOAD_COURSES_SUCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSucess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
