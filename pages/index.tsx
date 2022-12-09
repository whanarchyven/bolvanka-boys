import { useEffect } from "react";

const PageIndex = () => {
  useEffect(() => {
    document.location.href = "/access-denied";
  }, []);
  return null;
};
export default PageIndex;
