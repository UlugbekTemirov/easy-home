import React from "react";
import PinkBtn from "../../../components/PinkBtn";
import FormInput from "../../../components/FormInput";
import TextArea from "../../../components/TextArea";
import CustomForm from "../../../components/CustomForm";
import TelMask from "../../../components/TelMask";
import formDict from "../../../db/contactform.db";

function ContactForm({ className = "" }) {
  return (
    <div className={className}>
      <CustomForm title={formDict.titleLang} className="">
        <FormInput placeholder={formDict.placeholderName} name={"name"} />
        <FormInput
          type="email"
          placeholder={formDict.placeholderEmail}
          name={"email"}
        />
        <TelMask />
        <TextArea placeholder={formDict.placeholderMessage} name={"message"} />
        <PinkBtn value={formDict.sendLang} className="mt-5" />
      </CustomForm>
    </div>
  );
}

export default ContactForm;
