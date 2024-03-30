import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { TextAreaField } from './TextAreaField';
import SendEmail from '../../services/sendmail';

export const FormContact = () => {
  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = Yup.object({
    fullName: Yup.string()
      .max(35, 'Must be 35 characters or more')
      .required('Full Name is Required'),
    email: Yup.string().matches(emailValidation, 'Email is invalid').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    message: Yup.string().required('Message is required'),
  });
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);

        fetch('/api/contact').then((res) => res.json().then((data) => console.log(data)));
      }}
    >
      {(formik) => (
        <div
          className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
          data-wow-delay=".2s"
        >
          <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
            Send us a Message
          </h3>
          <Form>
            <TextField label="Full Name*" name="fullName" type="text" placeholder="John Doe" />
            <TextField
              label="Email*"
              name="email"
              type="email"
              placeholder="example@yourmail.com"
            />
            <TextField label="Phone*" name="phone" type="text" placeholder="+13051255211" />
            <TextAreaField
              label="Message*"
              name="message"
              type="text"
              placeholder="type your message here"
            />

            <div className="mb-0">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-btn-hover-dark"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
