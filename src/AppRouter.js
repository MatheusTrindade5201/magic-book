import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Staff from "./Pages/Staff";
import Students from "./Pages/Students";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Students />} path='/students' />
            <Route element={<Staff />} path='/staff' />
        </Routes>
    )
}

export default AppRouter