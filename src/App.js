import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./containers/home/Home";
import Navbar from "./components/navbar/Navbar";
import Articles from "./containers/articles/Articles";
import Blogs from "./containers/blogs/Blogs";
import Reports from "./containers/reports/Reports";
import Box from "@mui/material/Box";
import { theme } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
