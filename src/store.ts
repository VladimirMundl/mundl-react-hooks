import { createContext } from "react";

const initialState = {
  first: "Jane",
  last: "Smith",
};

export type userState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
