import api from "./axios";

export const getHomeData = async () => {    
    const response = await api.get("/menu/categories");
    return response.data;
}