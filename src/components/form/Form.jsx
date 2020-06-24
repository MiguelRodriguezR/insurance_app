import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDifYear, getPriceBrand, getPricePlan } from "../../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const IRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
  }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({saveResume}) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, saveError] = useState(false);

  const getInfo = (e) => {
    saveData({ ...data, [e.target.name]: e.target.value });
  };


  const getPrice = e => {
      e.preventDefault();
      if(data.brand === '' || data.plan === '' || data.year === ''){
          saveError(true);
          return;
      }
      saveError(false); 

      let price = 2000;
      const dif = getDifYear(data.year);
      price -= ((dif * 0.03 ) * price)
      price = getPriceBrand(data.brand) * price;
      price = parseFloat(getPricePlan(data.plan) * price).toFixed(2);

      saveResume({
          price,
          data
      })
  }

  return (
    <form
        onSubmit={getPrice}
    
    >
        {error ? <Error>All Fields are required</Error> : null} 
      <Field>
        <Label htmlFor="">Brand</Label>
        <Select name="brand" id="" value={data.brand} onChange={getInfo}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="">Year</Label>
        <Select name="year" id="" value={data.year} onChange={getInfo}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="">Plan</Label>
        <IRadio
          type="radio"
          name="plan"
          value="basic"
          checked={data.plan === "basic"}
          onChange={getInfo}
        /> Basic
        <IRadio
          type="radio"
          name="plan"
          value="complete"
          checked={data.plan === "complete"}
          onChange={getInfo}
        /> Complete
      </Field>

      <Button type="submit">Get Price</Button>
    </form>
  );
};

export default Form;
