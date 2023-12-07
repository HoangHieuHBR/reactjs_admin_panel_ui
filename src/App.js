import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Topbar, Sidebar } from "./screens/global/index";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Dashboard />} />
              <Route path="/contacts" element={<Dashboard />} />
              <Route path="/invoices" element={<Dashboard />} />
              <Route path="/form" element={<Dashboard />} />
              <Route path="/bar" element={<Dashboard />} />
              <Route path="/pie" element={<Dashboard />} />
              <Route path="/line" element={<Dashboard />} />
              <Route path="/faq" element={<Dashboard />} />
              <Route path="/geography" element={<Dashboard />} />
              <Route path="/calendar" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
