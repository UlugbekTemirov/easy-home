import React from "react";
import bgContact from "../../../assets/images/bg-contact.jpg";
import CustomForm from "../../../components/CustomForm";
import FormInput from "../../../components/FormInput";
import PinkBtn from "../../../components/PinkBtn";
import TextArea from "../../../components/TextArea";
import TelMask from "../../../components/TelMask";
import formDict from "../../../db/contactform.db";
import contactPhone from "../../../assets/images/contact-phone.png";
import Container from "../../../layout/Container";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../config";

const messageDict = {
  uz: "Xabar muvaffaqiyatli yuborildi!",
  ru: "Сообщение успешно отправлено!",
  en: "Message sent successfully!",
};

function HomeContact() {
  const { lang } = useSelector((state) => state.navbar);
  const { pageImage } = useSelector((state) => state.pageImage);

  return (
    <div
      data-aos="fade-up"
      className="home-contact-form py-20 mt-16 md:mt-[200px]"
      style={{
        backgroundImage: `url(${
          pageImage?.home_contact
            ? BASE_URL + pageImage.home_contact
            : bgContact
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="flex items-center justify-center xl:justify-end relative">
          <div className="hidden xl:block absolute right-[50%] bottom-[-80px] translate-x-[-50%]">
            <img src={contactPhone} alt="" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <CustomForm
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(
                  messageDict[lang.toLowerCase()] || messageDict["en"]
                );
              }}
              title={formDict.titleLang}
              className="w-full md:w-[500px] rounded-md"
            >
              <FormInput placeholder={formDict.placeholderName} name={"name"} />
              <FormInput
                type="email"
                placeholder={formDict.placeholderEmail}
                name={"email"}
              />
              <TelMask />
              <TextArea
                placeholder={formDict.placeholderMessage}
                name={"message"}
              />
              <PinkBtn value={formDict.sendLang} className="mt-5" />
            </CustomForm>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeContact;
