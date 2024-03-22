import { useContext } from "react";
import { AppContext } from "../context";
export default function useGlobalContext() {
  return useContext(AppContext);
}
