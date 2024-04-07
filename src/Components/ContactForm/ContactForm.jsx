import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    addContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.addForm}>
        <label className={css.nameLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.formInput} type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.numberLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field className={css.formInput} type="tel" name="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
