import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    //this is called a class field
    course: {
      title: ""
    }
  };

  handleChnge = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChnge}
          value={this.state.value}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch){
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
