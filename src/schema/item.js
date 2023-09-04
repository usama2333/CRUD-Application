import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter name"),
  discription: Yup.string().min(2).max(25).required("Please enter discription"),
  price:Yup.number().integer().min(2).max(10).required('Please Enter price '),
  category: Yup.string().min(2).max(15).required("Please enter Caterory"),


});