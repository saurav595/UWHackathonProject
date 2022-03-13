import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const SurveyForm = () => {
  return (
    <>
      <h1>Survey</h1>
      <Formik
        initialValues={{
          meal: "",
          isolation: "",
          hygiene: "",
          acceptedTerms: false,
          mental: "",
          employed: "",
          disaster: "",
          communitySupport: "",
          notes: ""
        }}
      >
        <Form>
          <MySelect label="Are you currently employed?" name="employed">
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Do you know where your next meal is coming from?"
            name="meal"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Are you receiving food from more than one food banks / communities?"
            name="meal"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Do you feel isolated from your community?"
            name="isolation"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Do you know anyone mental support center around you?"
            name="mental"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Are you affected by any natural disaster (flood, forest fires)?"
            name="disaster"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MySelect
            label="Do you have access to clothes and / or female hygiene products?"
            name="hygiene"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>

          <MyTextInput
            label="Any other comments"
            name="notes"
            type="text"
            placeholder="Please add any other comments"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

function App() {
  return <SurveyForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
