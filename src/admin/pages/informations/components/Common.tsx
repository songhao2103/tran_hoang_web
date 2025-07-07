import { useFormik } from "formik";
import * as Yup from "yup";
import { INITIAL_VALUES_INFORMATION } from "../constance";
import InformationCard from "../../../components/cards/InformationCard";

const validationFormik = Yup.object({
  address: Yup.string().required("Vui lòng nhập địa chỉ"),

  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),

  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại")
    .matches(
      /^(?:(?:\+84|84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}|(?:\+86|86|1)[3-9][0-9]{9})$/,
      "Số điện thoại không hợp lệ (Việt Nam hoặc Trung Quốc)"
    ),

  facebook: Yup.string().required("Vui lòng nhập lại mật khẩu"),

  zalo: Yup.string().required("Vui lòng nhập url zalo"),

  companyName: Yup.string().required("Vui lòng nhập lại tên công ty"),
});

const Common = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES_INFORMATION,
    validationSchema: validationFormik,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = (field: string, value: string) => {
    formik.setFieldValue(field, value);
  };

  return (
    <div>
      <p className="title-h6 pb-2 border-b mb-2">Thông tin chung</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <InformationCard
          defaultValue={formik.values.companyName}
          onSubmit={(value: string) => handleSubmit("companyName", value)}
          label="Tên công ty"
        />
        <InformationCard
          defaultValue={formik.values.address}
          onSubmit={(value: string) => handleSubmit("address", value)}
          label="Địa chỉ"
        />
        <InformationCard
          defaultValue={formik.values.email}
          onSubmit={(value: string) => handleSubmit("email", value)}
          label="Email"
        />
        <InformationCard
          defaultValue={formik.values.phone}
          onSubmit={(value: string) => handleSubmit("phone", value)}
          label="Số điện thoại"
        />

        <InformationCard
          defaultValue={formik.values.facebook}
          onSubmit={(value: string) => handleSubmit("facebook", value)}
          label="Facebook"
          nodeValue={
            <a
              href={formik.values.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline cursor-pointer text-md"
            >
              {formik.values.facebook}
            </a>
          }
        />
        <InformationCard
          defaultValue={formik.values.messenger}
          onSubmit={(value: string) => handleSubmit("messenger", value)}
          nodeValue={
            <a
              href={formik.values.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline cursor-pointer text-md"
            >
              {formik.values.messenger}
            </a>
          }
          label="Messenger"
        />
        <InformationCard
          defaultValue={formik.values.zalo}
          onSubmit={(value: string) => handleSubmit("zalo", value)}
          nodeValue={
            <a
              href={formik.values.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline cursor-pointer text-md"
            >
              {formik.values.messenger}
            </a>
          }
          label="Zalo"
        />
      </div>
    </div>
  );
};

export default Common;
