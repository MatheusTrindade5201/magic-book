import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SpellBook from "./Pages/SpellBook";
import Staff from "./Pages/Staff";
import Students from "./Pages/Students";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Students />} path='/students' />
            <Route element={<Staff />} path='/staff' />
            <Route element={<SpellBook />} path='/spell-book' />
        </Routes>
    )
}

export default AppRouter