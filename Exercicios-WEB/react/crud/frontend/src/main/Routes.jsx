import React from 'react'
//import {Route, Redirect } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

{/* Aula 11 - Projeto Cadastro de Usuário: Implementando Rotas (React Router) */}

export default props => 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
