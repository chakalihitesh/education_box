/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyOTP from "./pages/VerifyOTP";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Lesson from "./pages/Lesson";
import Bot from "./pages/Bot";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import LanguageSettings from "./pages/LanguageSettings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding-1" element={<Onboarding1 />} />
        <Route path="/onboarding-2" element={<Onboarding2 />} />
        <Route path="/onboarding-3" element={<Onboarding3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/language" element={<LanguageSettings />} />
      </Routes>
    </BrowserRouter>
  );
}
