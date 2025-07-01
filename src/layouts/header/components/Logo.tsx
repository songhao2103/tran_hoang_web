import logo from "../../../assets/images/logos/logo1.jfif"; // Adjust the path as necessary

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
    </a>
  );
};

export default Logo;
