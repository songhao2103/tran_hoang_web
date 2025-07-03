import React from "react";
import InputCommon from "../../../components/input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonCustom from "../../../components/button/ButtonCustom";
const initialFormikValues = {
  customerName: "",
  phone: "",
  content: "",
};

const validationFormik = Yup.object({
  customerName: Yup.string().required("Vui lòng nhập họ tên của bạn"),

  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại của bạn")
    .matches(
      /^(?:\+?84|0)(3|5|7|8|9)\d{8}$|^(?:\+?86)?1[3-9]\d{9}$/,
      "Số điện thoại không hợp lệ (chỉ chấp nhận VN hoặc TQ)"
    ),

  content: Yup.string().required("Vui lòng nhập nội dung"),
});
const FormContact = () => {
  const formik = useFormik({
    initialValues: initialFormikValues,
    validationSchema: validationFormik,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFormikChange = (field: string, value: string) => {
    formik.setFieldValue(field, value);
  };
  return (
    <div className="w-full">
      <p className="title-h2">Gửi tin nhắn</p>
      <div className="flex flex-col gap-y-4">
        <InputCommon
          placeholder="Nhập họ và tên"
          label="Họ và tên"
          id="customerName"
          value={formik.values.content}
          onChange={(value: string) =>
            handleFormikChange("customerName", value)
          }
          autoFocus
        />
        <InputCommon
          placeholder="Nhập số điện thoại"
          label="Số điện thoại"
          id="phone"
          value={formik.values.content}
          onChange={(value: string) => handleFormikChange("phone", value)}
        />
        <InputCommon
          placeholder="Nhập nội dung"
          label="Nhập nội dung"
          id="content"
          rows={3}
          onChange={(value: string) => handleFormikChange("content", value)}
          value={formik.values.content}
          multiple
        />

        <div className="flex">
          <ButtonCustom label="Gửi tin nhắn" />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
