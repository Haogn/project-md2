import React, { useEffect, useState } from "react";
import "./Bag.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import swal from "sweetalert";

function Bag() {
  // khởi tạo state để lấy dữ liệu trên API
  const [cart, setCart] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem("dataLogin"));

  const loadCart = async () => {
    const result = await axios.get(`http://localhost:7500/cart/${dataUser.id}`);
    setCart(result.data);
  };

  // console.log("cart", cart);
  // tăng số lượng
  const handlePlus = (i) => {
    const upCount = [...cart];
    upCount[i].count += 1;
    setCart(upCount);
    axios.patch(`http://localhost:7500/cart/${dataUser.id}`, {
      dataCart: upCount,
    });
  };

  // giảm số lượng
  const handleMinus = (i) => {
    const downCount = [...cart];

    if (downCount[i].count > 1) {
      downCount[i].count -= 1;
    } else {
      downCount.splice(i, 1);
    }
    setCart(downCount);
    axios.patch(`http://localhost:7500/cart/${dataUser.id}`, {
      dataCart: downCount,
    });
  };

  // Delete sản phẩm
  const handleDelete = (i) => {
    const updatedCart = [...cart]; // Tạo một bản sao mới của mảng cart
    // Xóa sản phẩm khỏi giỏ hàng
    updatedCart.splice(i, 1);

    setCart(updatedCart); // Cập nhật lại giá trị cart
    axios.patch(`http://localhost:7500/cart/${dataUser.id}`, {
      dataCart: updatedCart,
    });
  };

  // tổng tiền
  function compar() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].count * cart[i].price;
    }
    return sum;
  }

  // sự kiện ô input khi thanh toán :
  const [history, setHistory] = useState({
    phone: "",
    address: "",
  });

  // const { phone, address } = history;
  const handleInput = (e) => {
    setHistory({ ...history, [e.target.name]: e.target.value });
  };

  const handlePay = () => {
    if (history.address === "" || history.phone === "") {
      swal({
        title: "Lỗi thanh toán?",
        text: "Vui lòng thử lại!",
        icon: "warning",
      });
    } else {
      axios
        .patch(`http://localhost:7500/datausers/${dataUser.id}`, {
          history: [
            {
              phone: history.phone,
              address: history.address,
              bill: compar(),
              productsBuy: cart,
            },
          ],
        })
        .then(() => {
          setHistory({
            phone: "",
            address: "",
          });

          axios
            .patch(`http://localhost:7500/cart/${dataUser.id}`, {
              dataCart: [],
            })
            .then(() => {
              setCart([]);
            })
            .catch((error) => {
              console.log("Error deleting cart items:", error);
            });
        })
        .catch((error) => {
          console.log("Error updating user data:", error);
        });
      swal("Thanh toán thành công", "success");
    }
  };
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadCart();
    compar();
    axios
      .get(`http://localhost:7500/cart/${dataUser.id}`)
      .then((res) => setCart(res.data.dataCart));
  }, []);
  return (
    <div>
      <h1>Giỏ hàng của bạn</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th className="product">Sản phẩm</th>
              <th className="cart-img">Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th colSpan={2}></th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {/* Dữ liệu giỏ hàng sẽ được tạo ở phần JavaScript */}
            {cart.length > 0
              ? cart.map((e, i) => (
                  <>
                    <tr>
                      <th>{i + 1}</th>
                      <td>{e.name}</td>
                      <td className="img">
                        <img src={e.src1} />
                      </td>
                      <td>
                        <strong>{e.price} $</strong>
                      </td>
                      <td>
                        <strong>{e.count}</strong>
                      </td>
                      <td>
                        <Button
                          onClick={() => handlePlus(i)}
                          variant="outline-dark"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </Button>{" "}
                      </td>

                      <td>
                        <Button
                          onClick={() => handleMinus(i)}
                          variant="outline-dark"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </Button>{" "}
                      </td>
                      <td>
                        {" "}
                        <Button
                          onClick={() => handleDelete(i)}
                          variant="outline-danger"
                        >
                          Xóa
                        </Button>{" "}
                      </td>
                    </tr>
                  </>
                ))
              : ""}
          </tbody>
        </table>
        <div className="total">
          <h3>
            Tổng cộng: <strong id="totalAmount">{compar().toString()} $</strong>
          </h3>
        </div>
        <div className="checkout">
          <button onClick={handleShow} className="cart">
            Thanh toán
          </button>
        </div>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đơn hàng bạn cần thanh toán </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Số tiền
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={compar() + " $"}
              disabled={true}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Địa chỉ
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={history.address}
              name="address"
              onInput={(e) => handleInput(e)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Phone
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={history.phone}
              name="phone"
              onInput={(e) => handleInput(e)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePay}>
            <i className="fa-brands fa-amazon-pay"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Bag;
