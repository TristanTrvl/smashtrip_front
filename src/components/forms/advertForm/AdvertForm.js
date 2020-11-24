import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import PrimaryButton from "../../primaryComponents/buttons/PrimaryButton";
import TextInput from "../../primaryComponents/inputs/TextInput";
import Textarea from "../../primaryComponents/inputs/Textarea";
import Label from "../../primaryComponents/inputs/Label";
import TournamentSearch from "../../tournament/TournamentSearch";
import { useHistory } from "react-router-dom";

export default ({callback, location}) => {
  const [eventId, seteventId] = useState(location.newAdvertProps?.id || null);
  const [eventName, seteventName] = useState(location.newAdvertProps?.name || "");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [focusedInput, setfocusedInput] = useState([]);
  const [price, setprice] = useState(0);
  const [desc, setdesc] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    callback({
      "start_date": startDate,
      "end_date": endDate,
      "event_id": eventId,
      "price": price,
      "desc": desc,
    }).then(history.push('/advert-list'));
  };

  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
      <TournamentSearch name="event_id" label="Tournoi :" value={eventName} callback={(id) => {seteventId(id)}}/>
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
      <TextInput name="price" label="Prix :" type="number" value={price} onChange={(e)=>setprice(e.target.value)} />
      <Textarea name="desc" label="Description :" value={desc} onChange={(e)=>setdesc(e.target.value)} />
      <PrimaryButton>Valider</PrimaryButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;