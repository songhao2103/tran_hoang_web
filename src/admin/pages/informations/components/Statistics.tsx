import { useFormik } from "formik";
import * as Yup from "yup";
import InformationCard from "../../../components/cards/InformationCard";
import { INITIAL_VALUES_STATISTICS } from "../constance";

const validationFormik = Yup.object({
  order: Yup.number().required("Vui lòng nhập số đơn hàng"),
  customer: Yup.number().required("Vui lòng nhập số khách hàng"),
  totalVolume: Yup.number().required(
    "Vui lòng nhập tổng khối lượng hàng đã vận chuyển"
  ),
});

const Statistics = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES_STATISTICS,
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
      <p className="title-h6 pb-2 border-b mb-2">Số liệu thống kê</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <InformationCard
          defaultValue={formik.values.order.toString()}
          onSubmit={(value: string) => handleSubmit("order", value)}
          label="Tổng số lượng đơn hàng"
          valueType="number"
        />
        <InformationCard
          defaultValue={formik.values.customer.toString()}
          onSubmit={(value: string) => handleSubmit("customer", value)}
          label="Tổng số lượng khách hàng"
          valueType="number"
        />
        <InformationCard
          defaultValue={formik.values.totalVolume.toString()}
          onSubmit={(value: string) => handleSubmit("totalVolume", value)}
          label="Tổng khối lượng hàng vận chuyển (tấn)"
          valueType="number"
        />
      </div>
    </div>
  );
};

export default Statistics;
