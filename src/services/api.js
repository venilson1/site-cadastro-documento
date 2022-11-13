import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5189'
})


export const getDocument = async () => {
  return api.get(`api/documento`);
};

export const createDocument = async (codigo, titulo, categoria, processoId, arquivo) => {
  return api.post(`/api/documento`, {codigo, titulo, categoria, processoId, arquivo}, { headers: { "Content-Type": "multipart/form-data" }});
};

export const findDocumentById = async (id) => {
  return api.get(`/api/documento/${id}`);
};

export const findFileById = async (arquivoId) => {
  return api.get(`/api/documento/${arquivoId}/download`);
};

export const getProcess = async () => {
  return api.get(`api/processo`);
};