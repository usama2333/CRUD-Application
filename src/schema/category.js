import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Enter Category name"), 
});