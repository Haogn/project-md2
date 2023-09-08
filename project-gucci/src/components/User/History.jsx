import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";

function History() {
  const [dataHis, setDataHis] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const dataUser = JSON.parse(localStorage.getItem("dataLogin"));

  const loadHis = async () => {
    const result = await axios
      .get(`http://localhost:7500/datausers/${dataUser.id}`)
      .then((res) => setDataHis(res.data.history));
  };

  useEffect(() => {
    loadHis();
  }, []);

  // Xóa lịch sử đơn hàng
  const handleDelete = async (index) => {
    const updatedDataHis = [...dataHis];
    updatedDataHis.splice(index, 1);

    try {
      await axios.patch(`http://localhost:7500/datausers/${dataUser.id}`, {
        history: updatedDataHis,
      });
      setDataHis([]);
    } catch (error) {
      console.log(error);
    }
  };

  // Lưu các thay đổi khi chỉnh sửa
  const handleSave = async (index) => {
    const updatedDataHis = [...dataHis];
    updatedDataHis[index].address = editAddress;
    updatedDataHis[index].phone = editPhone;

    try {
      await axios.patch(`http://localhost:7500/datausers/${dataUser.id}`, {
        history: updatedDataHis,
      });
      setEditIndex(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Lịch sử đơn hàng</h1>
      <table
        style={{ width: "1200px", margin: "auto", textAlign: "center" }}
        className="table"
      >
        <thead>
          <tr>
            <th className="col" scope="col">
              #
            </th>
            <th className="col" scope="col">
              Tên sản phẩm
            </th>
            <th className="col" scope="col">
              Địa chỉ
            </th>
            <th className="col" scope="col">
              Bill
            </th>
            <th className="col" scope="col">
              Số Điện thoại
            </th>
            <th className="col" scope="col"></th>
          </tr>
        </thead>
        <tbody id="tbody">
          {/* nơi để sản phẩm đã mua */}
          {dataHis.map((e, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td
                style={{
                  width: "400px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                {e.productsBuy.map((product, index) => (
                  <div
                    style={{
                      width: "60%",
                      height: "60%",
                      margin: "auto",
                    }}
                    key={index}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      src={product.src1}
                      alt={product.name}
                    />

                    <p> Số lượng : {product.count}</p>
                  </div>
                ))}
              </td>
              <td>
                {editIndex === i ? (
                  <input
                    type="text"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                ) : (
                  e.address
                )}
              </td>
              <td>
                <strong>{e.bill}</strong> $
              </td>
              <td>
                {editIndex === i ? (
                  <input
                    type="text"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                ) : (
                  e.phone
                )}
              </td>
              <td>
                {editIndex === i ? (
                  <Button
                    onClick={() => handleSave(i)}
                    variant="outline-success"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => setEditIndex(i)}
                    variant="outline-success"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                )}
                <Button
                  style={{ marginLeft: "1rem" }}
                  onClick={() => handleDelete(i)}
                  variant="outline-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
