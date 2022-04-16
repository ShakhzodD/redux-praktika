import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { inputCreated, inputInitial, inputUpdate } from "./store/action";
import * as Yup from "yup";
import TextError from "./TextError";
export default function Input({ setShow, show }) {
  const { initialForm, isUpdate } = useSelector(state => state.reducer);
  console.log(isUpdate);
  const dispatch = useDispatch();
  const onSubmit = values => {
    setShow(!show);
    console.log("onsubmit", values);
    dispatch(inputCreated(values));
    dispatch(inputInitial());
  };

  const onSubmitUpdate = values => {
    setShow(!show);
    console.log("onsubmit", values);
    dispatch(inputUpdate(values));
    dispatch(inputInitial());
  };

  const validateSchema = Yup.object({
    name: Yup.string().required("Malumot Xato"),
    email: Yup.string().email().required("Malumot Xato"),
    password: Yup.string().required("Malumot Xato"),
    lastName: Yup.string().required("Malumot Xato"),
  });
  return (
    <div>
      <Formik
        initialValues={initialForm}
        onSubmit={isUpdate ? onSubmitUpdate : onSubmit}
        validationSchema={validateSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" className="form-control" />
          <ErrorMessage name="name" component={TextError} />
          <label htmlFor="lastName">Lastname</label>
          <Field name="lastName" id="name" className="form-control" />
          <ErrorMessage name="lastName" component={TextError} />
          <label htmlFor="email">Email</label>
          <Field name="email" id="email" className="form-control" />
          <ErrorMessage name="email" component={TextError} />
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" className="form-control" />
          <ErrorMessage name="password" component={TextError} />
          <button type="submit">click</button>
        </Form>
      </Formik>
    </div>
  );
}
