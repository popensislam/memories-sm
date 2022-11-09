import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import { publicRoutes } from "./routes";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";


const AppRouter = () => {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Container>
  );
};

export default AppRouter;
