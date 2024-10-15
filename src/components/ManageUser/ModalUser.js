import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import { createNewUser, updateCurrentUser } from "../../services/userServices";

const ModalUser = (props) => {
  const { action, dataModalUser } = props;
  const defaultUserData = {
    email: "",
    phone: "",
    name: "",
    password: "",
    address: "",
    sex: "",

  };

  const validInputsDefault = {
    email: true,
    phone: true,
    name: true,
    password: true,
    address: true,
    sex: true,

  };

  const [userData, setUserData] = useState(defaultUserData);
  const [validInputs, setValidInputs] = useState(validInputsDefault);

  const [userGroups, setUserGroups] = useState([]);


  const handleOnChangeInput = (value, name) => {
    let _userData = _.cloneDeep(userData);
    _userData[name] = value;
    setUserData(_userData);
  };

  const checkValidateInputs = () => {
    // create user
    if (action === "UPDATE") return true;
    setValidInputs(validInputsDefault);
    let arr = ["email", "phone", "password"];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (!userData[arr[i]]) {
        let _validInputs = _.cloneDeep(validInputsDefault);
        _validInputs[arr[i]] = false;
        setValidInputs(_validInputs);

        toast.error(`Empty input ${arr[i]}`);
        check = false;
        break;
      }
    }

    return check;
  };
  const handleConfirmUser = async () => {

    let check = checkValidateInputs();
    if (check === true) {
      let res =
        action === "CREATE"
          ? await createNewUser({
            ...userData
          })
          : await updateCurrentUser({
            ...userData
          });
      console.log("check res: ", res.data[1]);
      if (res && res.data[1] === "created") {
        props.onHide();
        setUserData({
          ...defaultUserData,
          group: userGroups && userGroups.length > 0 ? userGroups[0].id : "",
        });
        toast.success("UPDATE success");
      } else {
        toast.error("something wrong with service");
        let _validInputs = _.cloneDeep(validInputsDefault);
        _validInputs[res.DT] = false;
        setValidInputs(_validInputs);
        toast.success("UPDATE unsuccess");
      }
    }
  };
  const handleCloseModalUser = () => {
    props.onHide();
    setUserData(defaultUserData);
    setValidInputs(validInputsDefault);
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={() => handleCloseModalUser()}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>
              {props.action === "CREATE" ? "Create new user" : "Edit a user"}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-body row">
            <div className="col-12 col-sm-6 form-group">
              <label>
                Email Address (<span className="red">*</span>):
              </label>
              <input
                disabled={action === "CREATE" ? false : true}
                className={
                  validInputs.email ? "form-control" : "form-control is-invalid"
                }
                type="email"
                value={userData.email}
                onChange={(event) =>
                  handleOnChangeInput(event.target.value, "email")
                }
              />
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>
                Phone Number (<span className="red">*</span>):
              </label>
              <input
                disabled={action === "CREATE" ? false : true}
                className={
                  validInputs.phone ? "form-control" : "form-control is-invalid"
                }
                type="text"
                value={userData.phone}
                onChange={(event) =>
                  handleOnChangeInput(event.target.value, "phone")
                }
              />
            </div>

            <div className="col-12 col-sm-6 form-group">
              <label>Username:</label>
              <input
                className="form-control"
                type="text"
                value={userData.name}
                onChange={(event) =>
                  handleOnChangeInput(event.target.value, "name")
                }
              />
            </div>

            <div className="col-12 col-sm-6 form-group">
              {action === "CREATE" && (
                <>
                  <label>
                    Password (<span className="red">*</span>):
                  </label>
                  <input
                    className={
                      validInputs.password
                        ? "form-control"
                        : "form-control is-invalid"
                    }
                    type="password"
                    value={userData.password}
                    onChange={(event) =>
                      handleOnChangeInput(event.target.value, "password")
                    }
                  />
                </>
              )}
            </div>

            <div className="col-12 col-sm-12 form-group">
              <label>Address:</label>
              <input
                className="form-control"
                type="text"
                value={userData.address}
                onChange={(event) =>
                  handleOnChangeInput(event.target.value, "address")
                }
              />
            </div>

            <div className="col-12 col-sm-6 form-group">
              <label>Gender:</label>
              <select
                className="form-select"
                onChange={(event) =>
                  handleOnChangeInput(event.target.value, "sex")
                }
                value={userData.sex}
              >
                <option defaultValue="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModalUser()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleConfirmUser()}>
            {action === "CREATE" ? "Save" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUser;