import axios from 'axios';

// Tạo một instance axios với URL mặc định là backend của bạn
const instance = axios.create({
    baseURL: 'http://localhost/pbl4/Lisence_plate_Backend/api/',  // URL gốc của backend PHP
    headers: {
        'Content-Type': 'application/json',  // Đảm bảo đúng Content-Type
    },
});

export default instance;
