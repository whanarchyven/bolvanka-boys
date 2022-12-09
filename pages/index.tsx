import { useEffect } from "react";

const PageIndex = () => {
  useEffect(() => {
    document.location.href = "/home";
  }, []);
  return null;
};
export default PageIndex;
