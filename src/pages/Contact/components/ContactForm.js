import React from "react";
import PinkBtn from "../../../components/PinkBtn";
import FormInput from "../../../components/FormInput";
import TextArea from "../../../components/TextArea";
import CustomForm from "../../../components/CustomForm";
import TelMask from "../../../components/TelMask";
import formDict from "../../../db/contactform.db";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const messageDict = {
  uz: "Xabarigniz muvaqqiyatli yuborildi!",
  ru: "Ваше сообщение успешно отправлено!",
  en: "Your message has been sent successfully!",
};

function ContactForm({ className = "" }) {
  const { lang } = useSelector((state) => state.navbar);
  return (
    <div className={className}>
      <CustomForm
        onSubmit={(e) => {
          e.preventDefault();
          toast.success(messageDict[lang.toLowerCase()] || messageDict["en"]);
        }}
        title={formDict.titleLang}
        className=""
      >
        <FormInput placeholder={formDict.placeholderName} name={"name"} />
        <FormInput
          type="email"
          placeholder={formDict.placeholderEmail}
          name={"email"}
          required={false}
        />
        <TelMask />
        <TextArea placeholder={formDict.placeholderMessage} name={"message"} />
        <PinkBtn value={formDict.sendLang} className="mt-5" />
      </CustomForm>
    </div>
  );
}

export default ContactForm;
