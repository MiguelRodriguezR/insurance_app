import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mesage = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultContainer = styled.div`
    position:  relative;
`

const Result = ({ resume }) => {
  return resume.price ? (
    <ResultContainer>
      <TransitionGroup component="Mesage" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={resume.price}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Mesage>Total: $ {resume.price}</Mesage>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  ) : null;
};

export default Result;
