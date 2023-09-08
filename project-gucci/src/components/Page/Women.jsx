import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Css/ListProduct.scss";
import axios from "axios";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Handbags() {
  const dataUser = JSON.parse(localStorage.getItem("dataLogin"));
  console.log("dataUser", dataUser);

  // khởi tạo state
  const [data, setData] = useState([]);
  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:7500/product`);
    setData(result.data);
  };
  console.log("data", data);
  const women = data.filter((item) => item.tagName === "women");
  console.log("women ->>", women);

  // modal show
  const [show, setShow] = useState(false);
  const [dataShow, setDataShow] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    console.log("hello");
    setShow(true);
    await axios
      .get(`http://localhost:7500/product/${id}`)
      .then((res) => setDataShow(res.data));
  };

  // chức năng mua
  const [buy, setBuy] = useState([]);
  const [status, setStatus] = useState(false);
  const handaleBuy = async (id) => {
    women.forEach((e) => {
      if (e.id === id) {
        let check = -1;
        let newBuy = [...buy];
        for (let i = 0; i < buy.length; i++) {
          if (e.id === buy[i].id) {
            check = i;
          }
        }
        if (check > -1) {
          newBuy[check].count += 1;
        } else {
          newBuy.push({ ...e, count: 1 });
        }
        axios.patch(`http://localhost:7500/cart/${dataUser.id}`, {
          dataCart: newBuy,
        });
      }
    });
    setStatus(!status);
    alert("Đã thêm sản phẩm vào giỏ hàng");
  };

  console.log("buy", buy);
  useEffect(() => {
    loadProduct();
    axios
      .get(`http://localhost:7500/cart/${dataUser.id}`)
      .then((res) => setBuy(res.data.dataCart));
  }, [status]);

  return (
    <div>
      <div class="list-product ">
        <div class="item-product ">
          {women.map((e, i) => (
            <div className="img-product" id={e.id}>
              <div className="img">
                <img src={e.src1} />
                <i className="fa-regular fa-heart"></i>
              </div>

              <div
                className="carousel"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      onClick={() => handleShow(e.id)}
                      className="d-block"
                      src={e.src2}
                      alt="First slide"
                    />
                    <i className="fa-regular fa-heart"></i>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={e.src3} alt="Second slide" />
                    <i className="fa-regular fa-heart"></i>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={e.src4} />
                    <i className="fa-regular fa-heart"></i>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          ))}
          {/* modal */}
          {dataShow && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thông tin chi tiết sản phẩm : </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="card-body">
                  <img className="card-img" src={dataShow.src1} />
                  <h5>
                    {" "}
                    {dataShow.name} - <strong> {dataShow.price}</strong>
                  </h5>
                  <p>
                    {" "}
                    {dataShow.name} tác phẩm đặc trưng của Gucci không ngừng
                    phát triển xung quanh một câu chuyện năng động. Dòng hành lý
                    được đặc trưng bởi màu nâu sẫm như một phần của bộ sưu tập
                    Xuân Hè 2023, một sắc thái tinh tế để phản ánh sự xuất hiện
                    của một mùa mới. Họa tiết GG khổng lồ trở lại trên đỉnh
                    chiếc ba lô này, nổi bật với kích thước tối đa để tạo cảm
                    giác logo đặc biệt.
                  </p>
                  <p>{dataShow.productDetails}</p>
                </div>
                <div className="modal-footer">
                  <button>
                    <p onClick={() => handaleBuy(dataShow.id)} className="buy">
                      Buy
                    </p>
                    <svg
                      strokeWidth={4}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default Handbags;
