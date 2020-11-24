import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import PrimaryButton from "../../primaryComponents/buttons/PrimaryButton";
import Spinner from "../../primaryComponents/inputs/Spinner";
import Label from "../../primaryComponents/inputs/Label";

export default ({advertId, create}) => {
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [focusedInput, setfocusedInput] = useState([]);
  const [nbPersons, setnbPersons] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    create({
      "start_date": startDate,
      "end_date": endDate,
      "nb_persons": nbPersons,
      "housing_advert_id": advertId
    });
  };

  return (
      <FormContainer onSubmit={(event) => handleSubmit(event)}>
        <Label name="" label="Dates :">
          <DateRangePicker 
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) => {
              setstartDate(startDate);
              setendDate(endDate);
              }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setfocusedInput(focusedInput)}
          />
        </Label>
        <Spinner name="" label="Personnes :" value={nbPersons} number={nbPersons} onNumberChange={(nbPersons)=>setnbPersons(nbPersons)}/>
        <Submit>Valider</Submit>
      </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction:column;
  gap: 1rem;
`;
const Submit = styled(PrimaryButton)`
  align-self: center;
  display: block;
`;