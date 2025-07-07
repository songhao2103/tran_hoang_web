import FormContact from "./components/FormContact";
import LayoutContent from "../../layouts/LayoutContent";
import Contactcontent from "./components/Contactcontent";

const Contact = () => {
  return (
    <LayoutContent>
      <div className="flex flex-col-reverse lg:flex-row gap-y-6 lg:gap-x-10">
        <FormContact />
        <Contactcontent />
      </div>
      <div className="w-full mt-[100px] bg-red-500 h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.566409383384!2d105.81868137596933!3d21.010010888420883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac82768df277%3A0x69fc0ba419dcd498!2zMzMgTmcuIDQxIFAuIFRow6FpIEjDoCwgVHJ1bmcgTGnhu4d0LCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpIDExNTI1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1751439376343!5m2!1svi!2s"
          loading="lazy"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </div>
    </LayoutContent>
  );
};

export default Contact;
