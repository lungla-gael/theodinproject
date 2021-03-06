import React from 'react';
import { number, array, object, string } from 'prop-types';
import ProjectSubmissionsContainer from './containers/project-submissions-container';
import ProjectSubmissionContext from "./ProjectSubmissionContext";

const ProjectSubmissions = ({ submissions, course, lesson, userId, allSubmissionsPath, legacySubmissionsUrl, userSubmission }) => (
  <ProjectSubmissionContext.Provider value={{ userId, lesson, course, allSubmissionsPath, legacySubmissionsUrl }}>
    <ProjectSubmissionsContainer submissions={submissions} userSubmission={userSubmission} />
  </ProjectSubmissionContext.Provider>
);

ProjectSubmissions.defaultProps = {
  allSubmissionsPath: '',
  userId: null,
}

ProjectSubmissions.propTypes = {
  userId: number,
  submissions: array.isRequired,
  lesson: object.isRequired,
  course: object.isRequired,
  allSubmissionsPath: string,
  legacySubmissionsUrl: string,
  userSubmission: object
};

export default ProjectSubmissions;
