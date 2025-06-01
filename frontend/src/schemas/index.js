import * as Yup from "yup";

export const ContactSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  phone: Yup.string().min(2).max(25).required("Please enter your phone"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),

  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  message: Yup.string().min(3).required("Please enter your any message"),
});
