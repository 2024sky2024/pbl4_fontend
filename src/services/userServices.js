import axios from "../setup/axios";

// Hàm gọi API lấy danh sách người dùng
const getUsers = () => {
    return axios.get("user/read.php");
};

const fetchAllUsers = (page, limit) => {
    return axios.get(`user/showAll.php?page=${page}&limit=${limit}`);
}
const deleteUser = (idUser) => {
    return axios.delete("user/delete.php", {
        data: { id_user: idUser },
    })
}

const createNewUser = (userData) => {
    return axios.post("user/create.php",
        {
            ...userData
        }
    )
}

const updateCurrentUser = (data) =>{
    return axios.put("user/update.php",
        {
            ...data
        }
    )
}
export {
    getUsers,
    fetchAllUsers,
    deleteUser,
    createNewUser,
    updateCurrentUser
};
