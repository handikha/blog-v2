import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Article from "./pages/Article";
import user from "./json/user.json";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/Profile/profile.setting";
import AccountSetting from "./pages/Profile/account.setting";

function App() {
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/profile/account-setting/:setting"
          element={<AccountSetting />}
        />
        <Route path="/profile/profile-setting" element={<ProfileSetting />} />
        <Route path="/profile/:context" element={<Profile />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
