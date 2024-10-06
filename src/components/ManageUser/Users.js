
import { useEffect, useState } from "react";
import "./Users.scss";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModalUser from "./ModalUser";
const Users = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  
  // Modal states
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [isShowModalUser, setIsShowModalUser] = useState(false);
  const [actionModalUser, setActionModalUser] = useState("CREATE");
  const [dataModalUser, setDataModalUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  // Temporary user data
  const temporaryUsers = [
    { id: 1, email: "user1@example.com", username: "user1", Group: { name: "Admin" } },
    { id: 2, email: "user2@example.com", username: "user2", Group: { name: "User" } },
    { id: 3, email: "user3@example.com", username: "user3", Group: { name: "User" } },
    { id: 4, email: "user4@example.com", username: "user4", Group: { name: "Admin" } },
    { id: 5, email: "user5@example.com", username: "user5", Group: { name: "User" } },
    { id: 6, email: "user6@example.com", username: "user6", Group: { name: "Admin" } },
  ];

  const fetchUsers = async () => {
    // Simulating an API call with temporary data
    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = startIndex + currentLimit;
    const usersToDisplay = temporaryUsers.slice(startIndex, endIndex);
    setListUsers(usersToDisplay);
    setTotalPages(Math.ceil(temporaryUsers.length / currentLimit));
  };

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1);
  };

  const handleDeleteUser = async (user) => {
    setDataModal(user);
    setIsShowModalDelete(true);
  };

  const handleClose = () => {
    setIsShowModalDelete(false);
    setDataModal({});
  };

  const confirmDeleteUser = async () => {
    // Here you can add logic to delete the user from the temporary data
    toast.success("User deleted successfully!");
    fetchUsers();
    setIsShowModalDelete(false);
  };

  const onHideModalUser = async () => {
    setIsShowModalUser(false);
    setDataModalUser({});
    await fetchUsers();
  };

  const handleEditUser = (user) => {
    setActionModalUser("UPDATE");
    setDataModalUser(user);
    setIsShowModalUser(true);
  };

  return (
    <>
      <div className="container">
        <div className="manage-user-container">
          <div className="user-header">
            <div className="title mt-3">
              <h3>Manage Users</h3>
            </div>
            <div className="actions my-3">
              <button className="btn btn-success refresh" onClick={fetchUsers}>
                <i className="fa fa-refresh"></i> Refresh
              </button>
              <button className="btn btn-primary" onClick={() => {
                setIsShowModalUser(true);
                setActionModalUser("CREATE");
              }}>
                <i className="fa fa-plus-circle"></i> Add New User
              </button>
            </div>
          </div>
          <div className="user-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Id</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Group</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listUsers && listUsers.length > 0 ? (
                  <>
                    {listUsers.map((item, index) => (
                      <tr key={`row-${index}`}>
                        <td>{(currentPage - 1) * currentLimit + index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.Group ? item.Group.name : ""}</td>
                        <td>
                          <span title="Edit" className="edit" onClick={() => handleEditUser(item)}>
                            <i className="fa fa-pencil"></i>
                          </span>
                          <span title="Delete" className="delete" onClick={() => handleDeleteUser(item)}>
                            <i className="fa fa-trash"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan="6">Not Found User</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 0 && (
            <div className="user-footer">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={9}
                marginPagesDisplayed={4}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </div>
      </div>

      {/* Add modal components here for delete and user creation/editing */}
      <ModalUser
        show={isShowModalUser}
        onHide={onHideModalUser}
        action={actionModalUser}
        dataModalUser={dataModalUser}
      />
    </>
  );
};

export default Users;
