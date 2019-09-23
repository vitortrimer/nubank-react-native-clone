import React from "react";
import { StatusBar } from "react-native";
import Main from "./src/main/index";

const App = () => {
  return (
    <>
      <StatusBar barStyle="ligth-content" backgroundColor="#8810ae" />
      <Main />
    </>
  );
};
export default App;
