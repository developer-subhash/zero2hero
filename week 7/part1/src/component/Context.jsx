import { createContext, useContext } from "react";

const CountContext = createContext(0); // create context for managing count prop

export default CountContext;