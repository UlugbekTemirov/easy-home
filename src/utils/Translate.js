import { useSelector } from "react-redux";

const Translate = ({
  dictionary = {},
  errorText = {
    en: "Content not found",
    ru: "Содержание не найдено",
    uz: "Mazmun topilmadi",
  },
}) => {
  const { lang } = useSelector((state) => state.navbar);

  return dictionary
    ? dictionary[lang.toLowerCase()]
    : errorText[lang.toLowerCase()];
};

export default Translate;
