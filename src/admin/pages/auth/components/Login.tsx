import { useFormik } from "formik";
import * as Yup from "yup";
import { INITIAL_VALUES_LOGIN } from "../constance";
import InputCommon from "../../../../components/input/Input";
import ButtonCustom from "../../../../components/button/ButtonCustom";

const validationFormik = Yup.object({
  accountName: Yup.string().required("Vui lòng nhập tên tài khoản"),
  password: Yup.string().required("Vui lòng nhập password"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES_LOGIN,
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
      <p className="title-h2 text-center">Đăng nhập</p>
      <div className="mt-4 flex flex-col gap-y-2">
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

        <div className="mt-4">
          <ButtonCustom
            label="Đăng nhập"
            fullWidth
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
