import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useRef } from "react";

function AdProduct() {
  const index = useRef();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [check, setCheck] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  // search
  const [search, setSearch] = useState("");
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const loadProcut = async () => {
    let url = "http://localhost:7500/product";
    // logic tìm kiếm
    if (search) {
      url += `?q=${search}`;
    }

    const result = await axios.get(`${url}`);
    setData(result.data);
  };

  // Delete sản phẩm
  const habdleDelete = async (id) => {
    await axios.delete(`http://localhost:7500/product/${id}`);
    loadProcut();
  };

  useEffect(() => {
    loadProcut();
  }, [search, check]);

  // Tính toán index sản phẩm đầu tiên và cuối cùng trên mỗi trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [add, setAdd] = useState({
    tagName: "",
    name: "",
    price: "",
    src1: "",
    src2: "",
    src3: "",
    src4: "",
    productDetails: "",
    quantity: "",
  });

  // sự kiện ô Input
  const handleInput = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  // sự kiện onChangeSelect
  const handleChangeSelect = (e) => {
    setAdd({ ...add, tagName: e.target.value });
  };
  const {
    tagName,
    name,
    price,
    src1,
    src2,
    src3,
    src4,
    productDetails,
    quantity,
  } = add;
  // thêm mới sản phẩm

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (check) {
      data.forEach((e, i) => {
        if (e.id === index.current) {
          axios.patch(`http://localhost:7500/product/${e.id}`, { ...add });
        }
      });
    } else {
      await axios.post(`http://localhost:7500/product`, {
        tagName: tagName,
        name: name,
        price: +price,
        src1: src1,
        src2: src2,
        src3: src3,
        src4: src4,
        productDetails: productDetails,
        quantity: +quantity,
      });
      alert("Đã thêm sản phẩm mới vào danh sách sản phẩm ");
    }
    setLgShow(false);
    loadProcut();
    setAdd({
      tagName: "",
      name: "",
      price: "",
      src1: "",
      src2: "",
      src3: "",
      src4: "",
      productDetails: "",
      quantity: "",
    });
    setCheck(false);
  };

  /// Edit sản phẩm :
  const handleEdit = (i) => {
    data.forEach((e) => {
      if (e.id === i) {
        setAdd(e);
      }
    });
    setLgShow(true);
    setCheck(true);
    index.current = i;
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Admin Product</h2>
      <p style={{ textAlign: "center" }}>
        <Button onClick={() => setLgShow(true)} variant="success">
          Add new products
        </Button>{" "}
      </p>
      <div style={{ width: "1200px", margin: "auto", textAlign: "center" }}>
        <div style={{ marginBottom: "2rem" }} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChangeInput}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Tag Name</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((e, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e.id}</td>
                <td>{e.tagName}</td>
                <td>{e.name}</td>
                <td style={{ width: "40%" }}>
                  <img style={{ width: "40%" }} src={e.src1} />
                </td>
                <td>
                  <strong>{e.price}</strong> $
                </td>
                <td>{e.quantity}</td>
                <td>
                  <Button
                    onClick={() => handleEdit(e.id)}
                    variant="outline-success"
                  >
                    <i className="fa-solid fa-gears"></i>
                  </Button>{" "}
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => habdleDelete(e.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination>
          {data.length > 0 &&
            Math.ceil(data.length / itemsPerPage) > 1 &&
            Array.from(Array(Math.ceil(data.length / itemsPerPage))).map(
              (item, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
        </Pagination>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => {
            setLgShow(false);
            setCheck(false);
          }}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Add new Products
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form thêm mới sản phẩm  */}
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                  <Form.Label>Tag Name</Form.Label>
                  <Form.Select
                    onChange={(e) => handleChangeSelect(e)}
                    aria-label="Default select example"
                  >
                    <option>Open </option>
                    <option value="handbags">handbags</option>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="mx">mx</option>
                    <option value="watches">watches</option>
                    <option value="beauty">beauty</option>
                    <option value="chidren">chidren</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={quantity}
                    placeholder="Quantity"
                    name="quantity"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={price}
                    placeholder="Price"
                    name="price"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Image-1</Form.Label>
                  <Form.Control
                    type="text"
                    value={src1}
                    placeholder="Image-1"
                    name="src1"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Image-2</Form.Label>
                  <Form.Control
                    type="text"
                    value={src2}
                    placeholder="Image-2"
                    name="src2"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Image-3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image-3"
                    value={src3}
                    name="src3"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Image-4</Form.Label>
                  <Form.Control
                    type="text"
                    value={src4}
                    placeholder="Image-4"
                    name="src4"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom05">
                  <Form.Label>Product Details</Form.Label>
                  <Form.Control
                    type="text"
                    value={productDetails}
                    placeholder="productDetails"
                    name="productDetails"
                    onInput={(e) => handleInput(e)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3"></Form.Group>
              <p style={{ textAlign: "center" }}>
                {check ? (
                  <Button type="submit" variant="dark">
                    Update
                  </Button>
                ) : (
                  <Button type="submit" variant="outline-dark">
                    Add
                  </Button>
                )}
              </p>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      {/* modal */}
    </div>
  );
}

export default AdProduct;
