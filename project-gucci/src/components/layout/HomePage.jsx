import React, { useState } from "react";
import "../Css/HomePage.css";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mkt.1cdn.vn/2023/02/23/7.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mkt.1cdn.vn/2023/02/23/7.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mkt.1cdn.vn/2023/02/23/7.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section>
          <div className="contact">
            <img src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/346467645_3304860156492557_1896923818994421606_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YiRTfrWh4DAAX_oNM2i&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAbeslMKMUHlLDHWmQKzzQOTptKMdb8nEYJfFNOPOhjpQ&oe=6477A0C2" />
            <div className="contact-item">
              <p>GUCCI BAMBO 1 9 4 7 </p>
              <button>CONTACT US</button>
            </div>
          </div>
        </section>
        <section>
          <div className="discover">
            <div className="more">
              <p>GUCCI BAMBO 1947</p>
              <a href="#">DISCOVER MORE &gt;</a>
            </div>
            <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/346472292_1261896501425949_3000331421900147867_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pRN9I26XQ0EAX8aLdiD&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAFXKvFp9VBJpJp3VZwThctDavukRBSj5FBb_xHGhyEmA&oe=6476EF01" />
          </div>
        </section>
        <section>
          <div className="stories">
            <h4 className="stories-p">STORIES</h4>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="300px"
                      height="300px"
                      style={{ objectFit: "cover" }}
                      src="https://media.gucci.com/content/DiaryArticleSingle_Small_640x896/1679907623/DiaryArticleSingle_Gucci-Highwatchmaking-2023-02_001_Default.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>Gucci High Watchmaking</p>
                      <a href="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/346472292_1261896501425949_3000331421900147867_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pRN9I26XQ0EAX8aLdiD&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAFXKvFp9VBJpJp3VZwThctDavukRBSj5FBb_xHGhyEmA&oe=6476EF01">
                        DIVCOVER MORE &gt;{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="300px"
                      height="300px"
                      style={{ objectFit: "cover" }}
                      src="https://f9-zpcloud.zdn.vn/531516948524672600/e9fb43ac7fe0a0bef9f1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>The 21 with Hanni</p>
                      <a href="https://www.gucci.com/us/en/st/stories/article/the-21-with-hanni">
                        WATCH THE VIDEO
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="300px"
                      height="300px"
                      style={{ objectFit: "cover" }}
                      src="https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1679673624/DiaryArticleSingle_where-my-heart-beats-1_001_Default.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>Where My Heart Beats</p>
                      <a href="https://www.gucci.com/us/en/st/stories/article/where-my-heart-beats">
                        DISCOVER MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="b-example-divider" />
      </>
    </div>
  );
}

export default HomePage;
