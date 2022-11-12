import React from 'react'
import CreateDocumentPage from './pages/CreateDocumentPage'
import HomePage from './pages/HomePage'
import ListDocumentPage from './pages/ListDocumentPage'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path="/documento/listar" element={<HomePage><ListDocumentPage /></HomePage>} />
            <Route exact path="/documento/criar" element={<HomePage><CreateDocumentPage /></HomePage>} />
            <Route path="/" element={<Navigate replace to="/documento/listar" />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
    </Router>
  )
}
