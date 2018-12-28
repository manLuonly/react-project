import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import './index.less';

class HomeFilms extends Component {
  constructor(props){
    super(props);

    this.state = {
      banner: [
        {
          "bannerId": 61,
          "imgUrl": "https://static.maizuo.com/5ae2f810304805f30364eec708b5f794.jpg",
          "actionType": 2,
          "actionData": "{\"url\":\"https://m.maizuo.com/mz-act/active/pSBZDy582328\"}",
          "masterTitle": "",
          "slaveTitle": "",
          "bindBusinessId": ""
        },
        {
          "bannerId": 67,
          "imgUrl": "https://static.maizuo.com/419af7ddcd926e809f555a548be2a317.jpg",
          "actionType": 2,
          "actionData": "{\"url\":\"https://m.maizuo.com/mz-act/active/YXIXBk576366\"}",
          "masterTitle": "",
          "slaveTitle": "",
          "bindBusinessId": ""
        },
      ]
    }
  }
  render() {
    return (
      <div>
        {/* 在HomeFilms中定义好轮播图的参数,循环出轮播图 */}
          <Carousel className="home-banner"
            autoplay
            autoplayInterval={2000}
            infinite
          >
            {
              this.state.banner.map(item => (
                <img key={item.bannerId} src={item.imgUrl}></img>
              ))
            }
          </Carousel>
          <div className="tabs-bar-wrapper">
              <div className="tabs-bar">
                <ul className="tabs-nav">
                  <li className="active">
                    <span>正在热映</span>
                  </li>
                  <li>
                    <span>即将上映</span>
                  </li>
                  <div className="tab-ink-bar-wrapper">
                    <span className="tab-ink-bar"></span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="film-list-content">
              <ul>
                <li>
                  <div className="img">
                    <img alt="" />
                  </div>
                  <div className="info">
                    <div>
                      <span className="name">海王</span>
                      <span className="type">3D</span>
                    </div>
                    <div>
                      <span className="label">观众评分</span>
                      <span className="grade">7.2</span>
                    </div>
                    <div>
                      <span className="label">主演：哈哈哈哈哈哈</span>
                    </div>
                    <div>
                      <span className="label">美国 | 100分钟</span>
                    </div>
                  </div>
                  <div className="buy">购票</div>
                </li>
              </ul>

              <div className="load-more">加载下一页</div>
            </div>
          </div>
    )
  }
}

export default HomeFilms;
