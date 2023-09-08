import React from "react";

function What() {
  return (
    <div>
      <>
        <section>
          <p style={{ textAlign: "center" }} className="mewin">
            NEW IN
          </p>
          <div className="container text-center all">
            <div className="row align-items-center">
              <div className="col">
                <div className="card">
                  <img
                    width="200px"
                    height="400px"
                    style={{ objectFit: "cover" }}
                    src="https://bazaarvietnam.vn/wp-content/uploads/2021/02/BOY_6739.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">WOMEN</p>
                    <a href="https://www.gucci.com/ca/en/ca/whats-new/new-in/this-week-women-c-new-women">
                      Shop All &gt;
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    width="200px"
                    height="400px"
                    style={{ objectFit: "cover" }}
                    src="https://www.elleman.vn/wp-content/uploads/2020/02/03/g1_bstnamgucci2020_elleman_02-20.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">MEN</p>
                    <a href="https://www.gucci.com/ca/en/ca/whats-new/new-in/this-week-men-c-new-men">
                      Shop All &gt;{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img
            width="100%"
            src="https://b-f64-zpg-r.zdn.vn/4643132906119057346/7ec6a79614c0cb9e92d1.jpg"
            alt=""
          />
          <img
            width="100%"
            src="https://b-f62-zpg-r.zdn.vn/5136486612989822989/ae35d5b968efb7b1eefe.jpg"
            alt=""
          />
          <img
            width="100%"
            src="https://f47-zpg-r.zdn.vn/5531555976392899706/f8215bb0aded72b32bfc.jpg"
            alt=""
          />
          <img
            width="100%"
            src="https://b-f53-zpg-r.zdn.vn/6833462416607126707/a0d4a31e1048cf169659.jpg"
            alt=""
          />
          <img
            width="100%"
            src="https://b-f43-zpg-r.zdn.vn/4001871191029904223/372c7ad1c98716d94f96.jpg"
            alt=""
          />
        </section>
        <div className="b-example-divider" />
      </>
    </div>
  );
}

export default What;
