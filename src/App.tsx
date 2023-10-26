import { Route, Routes } from "react-router-dom";

import { Top } from "./components/pages/Top.tsx";
import "semantic-ui-css/semantic.min.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
};
