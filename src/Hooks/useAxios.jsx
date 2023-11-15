import axios from "axios";

const axiositem=axios.create({
    baseURL:"http://localhost:5000"
})

const useAxios = () => {
    return axiositem
};

export default useAxios;