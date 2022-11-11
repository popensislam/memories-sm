import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import { publicRoutes } from "./routes";
import { Container, Grid, useMediaQuery } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

const AppRouter = () => {
  const isTable = useMediaQuery("max-width: 990px");

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent={"center"} sx={{marginBottom: '30px'}}>
          <SideBar />
          <Grid container sx={{ width: isTable ? "100%" : "70%" }}>
            <Routes>
              {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
              <Route path="*" element={<MainPage />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AppRouter;
