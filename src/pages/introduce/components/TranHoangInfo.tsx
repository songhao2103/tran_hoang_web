import TranHoang from "../../../assets/images/slide-images/slide_image_4.png";
// import useWindowWidth from "../../../hooks/dom/useWindownWidth";

const TranHoangInfo = () => {
  // const windowWidth = useWindowWidth();

  return (
    <div className="flex items-end w-full h-full">
      {/* {windowWidth > 420 && (
        <div className="">
          <img
            src={TranHoang}
            alt="Tran Hoang"
            className="w-full h-[659px] object-cover"
          />
        </div>
      )} */}

      {/* <div className="bg-secondary text-light py-8 px-8  space-y-4 h-[80%] text-lg"> */}
      {/* <img
        src={TranHoang}
        alt="Tran Hoang"
        className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white"
      /> */}
      <img src={TranHoang} alt="Tran Hoang" className="w-full object-cover" />

      {/* <div>
          <p className="text-xl font-bold">Trần Hoàng</p>
          <p className="text-sm opacity-70">CEO & Founder</p>
        </div>
        <p className="max-w-xl mx-auto">
          We pride ourselves on providing the best transport services available
          all over the world.
        </p> */}
    </div>
    // </div>
  );
};

export default TranHoangInfo;
