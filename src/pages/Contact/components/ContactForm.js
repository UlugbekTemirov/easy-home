import React, { useState } from "react";
import PinkBtn from "../../../components/PinkBtn";
import FormInput from "../../../components/FormInput";
import TextArea from "../../../components/TextArea";
import CustomForm from "../../../components/CustomForm";
import TelMask from "../../../components/TelMask";
import formDict from "../../../db/contactform.db";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postContactDetails } from "../../../redux/contactDetails.slice";

const messageDict = {
  uz: "Xabarigniz muvaqqiyatli yuborildi!",
  ru: "Ваше сообщение успешно отправлено!",
  en: "Your message has been sent successfully!",
};

function ContactForm({ className = "" }) {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const { lang } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <CustomForm
        onSubmit={(e) => {
          e.preventDefault();
          console.log(contactDetails);
          dispatch(postContactDetails(contactDetails));
          toast.success(messageDict[lang.toLowerCase()] || messageDict["en"]);
        }}
        title={formDict.titleLang}
        className=""
      >
        <FormInput
          onChange={(e) =>
            setContactDetails({ ...contactDetails, name: e.target.value })
          }
          placeholder={formDict.placeholderName}
          name={"name"}
        />
        <FormInput
          onChange={(e) =>
            setContactDetails({ ...contactDetails, email: e.target.value })
          }
          type="email"
          placeholder={formDict.placeholderEmail}
          name={"email"}
          required={false}
        />
        <TelMask
          onChange={(e) => {
            console.log(e.target.value);
            setContactDetails({
              ...contactDetails,
              phone_number: e.target.value,
            });
          }}
        />
        <TextArea
          onChange={(e) =>
            setContactDetails({
              ...contactDetails,
              message: e.target.value,
            })
          }
          placeholder={formDict.placeholderMessage}
          name={"message"}
        />
        <PinkBtn value={formDict.sendLang} className="mt-5" />
      </CustomForm>
    </div>
  );
}

export default ContactForm;
