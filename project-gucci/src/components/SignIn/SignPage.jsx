import React, { useEffect, useState } from "react";
import "../Css/SignPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import swal from "sweetalert";

function SignPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });
  // tạo 1 state error
  const [error, setErros] = useState("");
  // tạo 1 state chứa các usre
  const [listUser, setListUser] = useState([]);
  const loadUsers = async () => {
    await axios
      .get(`http://localhost:7500/datausers`)
      .then((res) => setListUser(res.data));
  };
  console.log("listUser", listUser);

  // check
  const regName = /^[a-zA-Z\-]+$/;
  function checkEmail() {
    const regGmail =
      / \b [ AZ 0-9 ._%+ - ] + @ [ AZ 0 -9 . - ] + \. [ AZ ] {2,} \b/;
    const arr = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr = regGmail)) {
        return false;
      } else {
        return true;
      }
    }
  }

  function check(str) {
    const newArr = str.split("");
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === " ") {
        return false;
      }
    }
    return true;
  }
  // su dung navigate de chuyen trang
  const navigate = useNavigate();
  // su dung cu phap dectructuring
  const { username, password, password2, email } = user;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !check(username) ||
      !check(password) ||
      !check(password2) ||
      !check(email)
    ) {
      setErros("Đăng kí không được để khoảng trắng");
      swal({
        title: "Đăng kí thất bại?",
        text: "Vui lòng thử lại!",
        icon: "warning",
      });
    }
    if (
      username === "" ||
      password === "" ||
      password2 === "" ||
      email === ""
    ) {
      setErros("Đăng kí không được để trống");
      swal({
        title: "Đăng kí thất bại?",
        text: "Vui lòng thử lại!",
        icon: "warning",
      });
    } else {
      let checkCer = false;
      for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].username !== username) {
          if (password === password2) {
            checkCer = true;
          } else {
            checkCer = false;
            setErros("Password không trùng nhau");
            swal({
              title: "Đăng kí thất bại?",
              text: "Vui lòng thử lại!",
              icon: "warning",
            });
            break;
          }
        } else {
          checkCer = false;
          setErros("Tài khoảng đã tồn tại,");
          swal({
            title: "Đăng kí thất bại?",
            text: "Vui lòng thử lại!",
            icon: "warning",
          });
          break;
        }
      }
      if (checkCer) {
        axios.post(`http://localhost:7500/datausers`, {
          username: username,
          password: password,
          email: email,
          history: [],
        });
        axios.post(`http://localhost:7500/cart`, {
          dataCart: [],
        });
        swal("Đăng kí thành công", "Chúc bạn ngày mới vui vẻ!", "success");
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <section>
        <div
          style={{
            backgroundImage:
              'url("https://www.gucci.com/wallpapers/garden/laptop.jpg")',
            height: 800,
            width: "100%",
          }}
          className="container"
        >
          <form onSubmit={handleSubmit} className="form">
            <p id="heading">Sign up</p>
            {error ? (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : (
              ""
            )}
            <div className="field">
              <svg className="input-icon" width={16} height={16}>
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                autoComplete="off"
                placeholder="Username"
                name="username"
                id="username"
                className="input-field"
                type="text"
                value={username}
                onInput={(e) => handleInput(e)}
              />
            </div>
            <div className="field">
              <svg className="input-icon" width={16} height={16}>
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                autoComplete="off"
                placeholder="Email"
                name="email"
                id="email"
                className="input-field"
                type="email"
                value={email}
                onInput={(e) => handleInput(e)}
              />
            </div>
            <div className="field">
              <svg className="input-icon" width={16} height={16}>
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input
                placeholder="Password"
                name="password"
                className="input-field"
                type="password"
                value={password}
                onInput={(e) => handleInput(e)}
              />
            </div>
            <div className="field">
              <svg className="input-icon" width={16} height={16}>
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input
                placeholder="Confirm password"
                name="password2"
                className="input-field"
                type="password"
                value={password2}
                onInput={(e) => handleInput(e)}
              />
            </div>
            <button onClick={handleSubmit} id="dangki" className="button3">
              CONTINUE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignPage;
