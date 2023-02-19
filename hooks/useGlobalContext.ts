import { GlobalContext } from "contexts/GlobalContext";
import { useContext } from "react";

// ----------------------------------------------------------------------

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
