import logo from "../../../assets/images/logos/logo-trang.png"; // Adjust the path as necessary

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="/">
      <img
        src={logo}
        alt="Logo"
        className={`h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] ml-2 ${className}`}
      />
    </a>
  );
};

export default Logo;
