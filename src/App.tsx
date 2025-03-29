import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./page/home";
import SignInScreen from "./page/sign-in";
import SignUpScreen from "./page/sign-up";
import DashboardScreen from "./page/dashboard";
// import { Navbar } from "./components/navbar";
// import { Footer } from "./components/footer";

import { SheetProvider } from "./providers/sheet-provider";
import { SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <SheetProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
          </Routes>
          {/* <Footer /> */}
        </SheetProvider>
      </SidebarProvider>
    </Router>
  );
}

export default App;
