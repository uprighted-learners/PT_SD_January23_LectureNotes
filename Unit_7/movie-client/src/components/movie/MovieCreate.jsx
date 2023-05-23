import React from "react";
// import the needed elements from reactstrap
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import FullButton from "../buttons/FullButton";

export default function MovieCreate() {
  // Have an array of movie ratings
  let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];

  // Create a function to make a year span logically happen and then return a JSX input mapping it
  const yearRange = () => {
    // init a years array
    let years = [null];

    // init a var for the current year
    const thisYear = new Date().getFullYear();

    // For loop to push years from 1892 to present to the array
    for (let i = thisYear; i >= 1892; i--) years.push(i);

    return (
      <>
        <Input type="select">
          {years.map((year, index) => {
            return <option key={index} value={year}>{year}</option>
          })}
        </Input>
      </>
    );
  };

  // Build out the form
  return (
    <>
      <h1>Add Movie</h1>
      <Form>
        <FormGroup>
          <Label>Title</Label>
          <Input autoComplete="off" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label>Genre</Label>
          <Input type="select">
            <option value={""}></option>
            <option value={"Comedy"}>Comedy</option>
            <option value={"Drama"}>Drama</option>
            <option value={"Action"}>Action</option>
            <option value={"Horror"}>Horror</option>
            <option value={"Thriller"}>Thriller</option>
            <option value={"Family"}>Family</option>
            <option value={"Documentary"}>Documentary</option>
            <option value={"Romance"}>Romance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Rating</Label>
          <Input type="select">
            {ratings.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Length (in minutes)</Label>
          <Input type="number" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Label>Year Released</Label>
          {yearRange()}
        </FormGroup>
        <FullButton>
          <Button color="success">Add Movie</Button>
        </FullButton>
      </Form>
    </>
  );
}
