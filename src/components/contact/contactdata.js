import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
export const contactdata = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    method: "Email",
    methoddetail: "adnan21abid@gmail.com",
    adress: "mailto:adnan21abid@gmail.com",
  },
  {
    icon: <CiLinkedin className="contact__option-icon" />,
    method: "Linkedin",
    methoddetail: "Adnan Abid",
    adress: "https://www.linkedin.com/in/adnan-abid-6a7681227/",
  },
  {
    icon: <BsWhatsapp className="contact__option-icon" />,
    method: "Whatsapp",
    methoddetail: "+123456789",
    adress: "https://api.whatsapp.com/send?phone=923045461163",
  },
];
