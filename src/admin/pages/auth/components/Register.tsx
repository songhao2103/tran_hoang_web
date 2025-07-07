import { useFormik } from "formik";
import * as Yup from "yup";
import { INITIAL_VALUES_REGISTER } from "../constance";
import InputCommon from "../../../../components/input/Input";
import ButtonCustom from "../../../../components/button/ButtonCustom";

const validationFormik = Yup.object({
  userName: Yup.string().required("Vui lòng nhập họ tên của bạn"),
  accountName: Yup.string().required("Vui lòng nhập tên tài khoản"),
  password: Yup.string().required("Vui lòng nhập password"),
  rePassword: Yup.string()
    .required("Vui lòng nhập lại password")
    .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không khớp"),
});

const Register = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES_REGISTER,
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
      <p className="title-h2 text-center">Đăng ký</p>
      <div className="mt-4 flex flex-col gap-y-2">
        <InputCommon
          required
          placeholder="Nhập họ và tên"
          label="Họ và tên"
          id="userName"
          value={formik.values.userName}
          onChange={(value: string) => handleFormikChange("userName", value)}
          autoFocus
          helperText={
            formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : ""
          }
        />
        <InputCommon
          required
          placeholder="Nhập tên tài khoản"
          label="Tên tài khoản"
          id="accountName"
          value={formik.values.accountName}
          onChange={(value: string) => handleFormikChange("accountName", value)}
          autoFocus
          helperText={
            formik.touched.accountName && formik.errors.accountName
              ? formik.errors.accountName
              : ""
          }
        />
        <InputCommon
          required
          placeholder="Nhập mật khẩu"
          label="Mật khẩu"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={(value: string) => handleFormikChange("password", value)}
          autoFocus
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />
        <InputCommon
          required
          placeholder="Nhập lại mật khẩu"
          label="Nhập lại mật khẩu"
          id="repassword"
          type="password"
          value={formik.values.repassword}
          onChange={(value: string) => handleFormikChange("repassword", value)}
          autoFocus
          helperText={
            formik.touched.repassword && formik.errors.repassword
              ? formik.errors.repassword
              : ""
          }
        />

        <div className="mt-4">
          <ButtonCustom
            label="Đăng ký"
            fullWidth
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
