import React from 'react';
import * as styles from './Banner.module.scss';

export default class Banner extends React.Component {
  constructor () {
    super();
    this.state = {
      imgPath: `${process.env.PUBLIC_URL}/images/banner/BannerImage1.png`,
      mobImgPath: `${process.env.PUBLIC_URL}/images/banner/mobile/BannerImage1.png`
    }
    this.intervalId = 0;
  }

  componentDidMount () {
    let i = 1;
    this.intervalId = setInterval(() => {
      i = i === 5 ? 1 : i + 1;
      this.toggleImages(i)
    }, 10000)
  }

  componentWillUnmount () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleImages = (i) => {
    this.setState(
      {
        imgPath: `${process.env.PUBLIC_URL}/images/banner/BannerImage${i}.png`,
        mobImgPath: `${process.env.PUBLIC_URL}/images/banner/mobile/BannerImage${i}.png`
      })
  }

  render () {
    return (
            <div className={styles.banner} style={{ background: window.innerWidth > 515 && window.innerWidth < 768 ? `url(${this.state.imgPath})` : `url(${this.state.mobImgPath}) no-repeat`, backgroundPosition: 'left center' }}>
            </div>

    )
  }
}
