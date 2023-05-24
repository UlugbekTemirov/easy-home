import { useSelector } from "react-redux";

const Translate = ({ dictionary }) => {
  const { lang } = useSelector((state) => state.selectLang);

  return dictionary[lang.toLowerCase()];
};

export default Translate;
