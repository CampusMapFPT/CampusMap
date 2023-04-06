import { HeadContext } from "contexts/HeadContext";
import { useContext } from "react";

// ----------------------------------------------------------------------

const useHeadContext = () => useContext(HeadContext);

export default useHeadContext;
