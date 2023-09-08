import React from "react";
import "../Css/Gifts.css";

function Gifts() {
  return (
    <div>
      <>
        <section>
          <div className="contact">
            <img src="https://dosi-in.com/images/news_content/18411/2020/05/20/mau-gucci-lai-mot-lan-nua-tu-xu-voi-bo-anh-fall-2020._2020_05_20_0.jpg" />
            <div className="contact-item">
              <p>GUCCI GIFTS </p>
            </div>
          </div>
        </section>
        <section>
          <div className="discover">
            <p>Gifts for Her </p>
            <img src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/346489624_629380182441820_4260430728296813635_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=leAjEyZK09AAX-PTdbC&_nc_ht=scontent.fhan15-2.fna&oh=00_AfCUyyeX3ThBjs2R1HjGgaEs79sEPyZvYaVvh5NAPkMsNg&oe=64764AC0" />
          </div>
        </section>
        <section>
          <div className="discover">
            <img src="https://vcdn1-ngoisao.vnecdn.net/2022/04/14/BAO-ANH-2-1649900111-jpeg-9869-1649934875.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=Lokc9_1Igq6gi9XiypNk3A" />
            <p>Personalized Gifts </p>
          </div>
        </section>
        <section>
          <div className="discover">
            <img src="https://i.vietgiaitri.com/2021/1/8/may-co-khanh-linh-va-quynh-anh-shyn-ma-cai-chat-gucci-duoc-vuc-day-nhin-sang-chau-bui-lai-tuot-mood-doi-chut-fa8-5501361.jpg" />
            <p>Beauty Gifts </p>
          </div>
        </section>
        <section>
          <div className="stories">
            <p className="stories-p">STORIES</p>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="300px"
                      height="300px"
                      style={{ objectFit: "cover" }}
                      src="https://f10-zpcloud.zdn.vn/4119899201433370730/55118de893be4ce015af.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>Collect In Store</p>
                      <a href="https://www.gucci.com/ca/en/st/collect-in-storeg">
                        FIND OUT MOVE &gt;{" "}
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
                      src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/7907198099635124ba126e29b35717aa_300_300.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>The 21 with Hanni</p>
                      <a href="https://www.gucci.com/ca/en/st/capsule/gifts-services#payment-options">
                        AT YOUR SERVICE
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
      </>
      <div className="b-example-divider" />
    </div>
  );
}

export default Gifts;
