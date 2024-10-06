// import React, { useState, useEffect } from "react";
// // import { getUserAccount } from "../services/userService"; // Tạm thời không sử dụng, mô phỏng dữ liệu

// const UserContext = React.createContext(null); // Tạo context cho trạng thái tài khoản

// const UserProvider = ({ children }) => {
//   const userDefault = {
//     isLoading: true,
//     isAuthenticated: false,
//     token: "",
//     account: {},
//   };

//   // State chứa thông tin người dùng
//   const [user, setUser] = useState(userDefault);

//   // Hàm đăng nhập, cập nhật dữ liệu người dùng
//   const loginContext = (userData) => {
//     setUser({
//       isAuthenticated: true,
//       token: userData.token,
//       account: userData.account,
//       isLoading: false,
//     });
//   };

//   // Hàm đăng xuất, thiết lập trạng thái người dùng về mặc định
//   const logoutContext = () => {
//     setUser({ ...userDefault, isLoading: false });
//   };

//   // Hàm giả lập xác thực và lấy dữ liệu tài khoản
//   const fetchUser = async () => {
//     try {
//       // Giả lập phản hồi từ API xác thực người dùng
//       let response = {
//         EC: 0,
//         DT: {
//           groupWithRoles: ["Admin", "User"],
//           email: "johndoe@example.com",
//           username: "JohnDoe",
//           access_token: "fake-token-12345",
//           userId: 1,
//         },
//       };

//       if (response && response.EC === 0) {
//         const { groupWithRoles, email, username, access_token, userId } = response.DT;
        
//         // Tạo dữ liệu người dùng từ phản hồi
//         let data = {
//           isAuthenticated: true,
//           token: access_token,
//           account: {
//             groupWithRoles,
//             email,
//             username,
//             userId,
//           },
//           isLoading: false,
//         };
        
//         setUser(data); // Cập nhật trạng thái người dùng
//       } else {
//         setUser({ ...userDefault, isLoading: false });
//       }
//     } catch (error) {
//       console.error("Lỗi khi lấy dữ liệu tài khoản: ", error);
//       setUser({ ...userDefault, isLoading: false });
//     }
//   };

//   useEffect(() => {
//     fetchUser(); // Gọi hàm fetchUser khi component được mount
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, loginContext, logoutContext, fetchUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserProvider };
