import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
//import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";
import SignUpPage from "./views/SignUpPage";

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
const SignUpForm = () => {
  return (
    <>
      <h1>Sign Up Form</h1>
      <Formik
        initialValues={{
          age: "",
          gender: "",
          phoneNumber: "",
          acceptedTerms: false,
          lowIncome: "",
          loneParent: "",
          immigrant: "",
          indigenous: "",
          zipCode: "",
          ethnicity: ""
        }}
      >
        <Form>
          <MyTextInput label="Age" name="age" type="number" placeholder="25" />

          <MyTextInput
            label="Ethnicity"
            name="ethnicity"
            type="text"
            placeholder="Please specify your response"
          />

          <MySelect label="What gender do you identify with?" name="gender">
            <option value="">Select response</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non - Binary">Non Binary</option>
            <option value="Not answer">Do not want to answer</option>
          </MySelect>

          <MyTextInput
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="123456789"
          />
          <MyTextInput
            label="Address Zip Code"
            name="zipCode"
            type="text"
            placeholder="V3J0J2"
          />
          <MySelect
            label="Is your annual income less than or equal to $25000?"
            name="lowIncome"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>
          <MySelect label="Are you a lone parent?" name="loneParent">
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>
          <MySelect label="Immigrant Status" name="immigrant">
            <option value="">What is your immigrant status?</option>
            <option value="Canadian or permanent resident">
              Canadian or permanent resident
            </option>
            <option value="Immigrant">Immigrant</option>
          </MySelect>
          <MySelect
            label="Do you belong to the indigenous community?"
            name="indigenous"
          >
            <option value="">Select response</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </MySelect>
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
  return <SignUpForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default SignUpForm;
