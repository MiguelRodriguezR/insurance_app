import React, { useState } from "react";
import styled from "@emotion/styled";
import Form from "../form/Form";
import Resume from "../resume/Resume";
import Result from "../result/Result";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3em;
`;

const Main = () => {


    const [resume, saveResume] = useState({ price : 0 , data: { brand: '', year: '', plan: ''}});

  return (
    <Container>
      <FormContainer>
          <Form saveResume = {saveResume}></Form>
          <Resume  resume = {resume}></Resume>
          <Result resume = {resume}></Result>
      </FormContainer>
    </Container>
  );
};

export default Main;
