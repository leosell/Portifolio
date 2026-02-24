import axios, { AxiosError, AxiosRequestConfig } from "axios";

const apiIn100 = axios.create({
  baseURL: "https://in100.novapowerhub.com.br/api",
  // baseURL: "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
});

export default apiIn100;
