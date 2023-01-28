import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Helmet} from "react-helmet";
import "./add.scss";
export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      price: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      image: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`http://localhost:5522/api/post`, values)
        .then(() => alert("Added successfully"));
      formik.resetForm();
    },
  });
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <label htmlFor="image">image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
