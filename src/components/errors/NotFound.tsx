import { useNavigate } from "react-router-dom";
import ButtonCustom from "../button/ButtonCustom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center ">
      <p className="text-[140px] font-extrabold text-secondary">404</p>
      <p className="title-h2 mt-6 mb-1">Oops! This Page is Not Found.</p>
      <p className="mb-6">
        We can’t find the page your are looking for. You can check out our Help
        Center or head back to Homepage.
      </p>
      <ButtonCustom label="Trang chủ" onClick={() => navigate("/")} />
    </div>
  );
};

export default NotFound;
