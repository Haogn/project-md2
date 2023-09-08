import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Css/ProductDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

function ProductDetails() {
  // khởi tạo state
  const [dataDetails, setDataDetails] = useState([]);
  // sử djng useParam để lấy id
  const { id } = useParams();
  console.log(id);
  // lấy dữ liệu từ API về
  const loadProduct = async () => {
    const result = await axios
      .get(`http://localhost:7500/product/${id}`)
      .then((res) => setDataDetails(res.data));
  };

  console.log("dataDetails", dataDetails);
  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <div className="left">
            <h4>Thông tin sản phẩm</h4>
            <p>{dataDetails.productDetails}</p>
          </div>
        </Col>
        <Col xs={6}>
          <div className="centerrr">
            <img src={dataDetails.src1} />
          </div>
        </Col>
        <Col>
          <div className="right">
            <div className="buy">
              <h5>{dataDetails.name}</h5> <br />
              <p>
                <strong>{dataDetails.price} $</strong>
              </p>
              <p>có sẵn</p>
              <button>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* 
      <div className="row">
        <div className="col-3 left">
          <h4>Thông tin sản phẩm</h4>
          <p>{dataDetails.productDetails}</p>
        </div>

        <div className="col-6">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-3 right">
          <div className="buy">
            <h5>{dataDetails.name}</h5> <br />
            <p>
              <strong>{dataDetails.price} $</strong>
            </p>
            <p>có sẵn</p>
            <button>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div> 
      */}
    </div>
  );
}

export default ProductDetails;
