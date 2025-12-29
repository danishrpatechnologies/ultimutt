import { Routes, Route } from "react-router-dom";

import PrivacyPolicy from "../privacy-policy";
import TermsUse from "../terms-of-use";
import Homepage from "../homepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsUse />} />
    </Routes>
  );
}
