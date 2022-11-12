import React from 'react'
import HomePage from './pages/HomePage'
import CreateDocumentPage from './pages/CreateDocumentPage'
import ListDocumentPage from './pages/ListDocumentPage'
import DocumentByIdPage from './pages/DocumentByIdPage'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path="/documento/listar" element={<HomePage><ListDocumentPage /></HomePage>} />
            <Route exact path="/documento/criar" element={<HomePage><CreateDocumentPage /></HomePage>} />
            <Route exact path="/documento/:id" element={<HomePage><DocumentByIdPage /></HomePage>} />
            <Route path="/" element={<Navigate replace to="/documento/listar" />} />
            <Route path='*' element={<HomePage><ListDocumentPage /></HomePage>} />
        </Routes>
    </Router>
  )
}
