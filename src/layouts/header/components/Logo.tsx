import logo from "../../../assets/images/logos/logo-trang.png"; // Adjust the path as necessary

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className="">
      <img src={logo} alt="Logo" className={`h-[50px] w-[50px] ${className}`} />
    </a>
  );
};

export default Logo;
