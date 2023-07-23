import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageImage } from "../redux/pageImage.slice";

function PageImage() {
  const { pageImage } = useSelector((state) => state.pageImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageImage.id) return;
    dispatch(getPageImage());

    //eslint-disable-next-line
  }, []);
}

export default PageImage;
