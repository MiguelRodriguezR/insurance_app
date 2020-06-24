import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { upperCaseFirst } from "../../helper";

const ResumeContent = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: white;
  margin-top: 1rem;
`;

const Resume = ({ resume }) => {
  
  return resume.price ? (
    <ResumeContent>
      <h2>Resume</h2>
      <ul>
        <li>Brand: {upperCaseFirst(resume.data.brand)}</li>
        <li>Year: {resume.data.year}</li>
        <li>Plan: {upperCaseFirst(resume.data.plan)}</li>
      </ul>
    </ResumeContent>
  ) : (
    <Fragment></Fragment>
  );
};

export default Resume;
