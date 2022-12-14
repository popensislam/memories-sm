import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'router/routes'
import { Container, Grid, useMediaQuery } from '@mui/material'

import NavBar from 'components/NavBar/NavBar'
import SideBar from 'components/SideBar/SideBar'

import { useAppSelector } from 'store/hooks'

import MainPage from 'pages/MainPage'
import AuthPage from 'pages/AuthPage'

const IsAuth: FC<{ isTable: boolean }> = ({ isTable }) => (
    <>
        <NavBar />
        <Container maxWidth="lg">
            <Grid container direction="row" justifyContent={'center'} sx={{ marginBottom: '30px' }}>
                <SideBar />
                <Grid container sx={{ width: isTable ? '100%' : '70%' }}>
                    <Routes>
                        {privateRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={<route.element />} />
                        ))}
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    </>
)
const IsNotAuth: FC = () => (
    <Routes>
        {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<AuthPage />} />
    </Routes>
)

const AppRouter = () => {
    const isTable = useMediaQuery('max-width: 990px')
    const token = localStorage.getItem('access')
    const { currentUser } = useAppSelector((state) => state.users)

    useEffect(() => {}, [currentUser])

    return token ? <IsAuth isTable={isTable} /> : <IsNotAuth />
}

export default AppRouter
