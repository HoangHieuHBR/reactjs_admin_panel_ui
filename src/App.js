import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Topbar, Sidebar } from "./screens/global/index";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Team from "./screens/team/Team";
import Contacts from "./screens/contacts/Contacts";
import Invoices from "./screens/invoices/Invoices";
import Form from "./screens/form/Form";
import Calendar from "./screens/calendar/Calendar";
import FAQ from "./screens/faq/FAQ";
import Bar from "./screens/bar/Bar";
import Pie from "./screens/pie/Pie";
import Line from "./screens/line/Line";
import Geography from "./screens/geography/Geography";

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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
