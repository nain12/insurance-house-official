import React from 'react';
import * as styles from './Banner.module.scss';

export default class Banner extends React.Component {
  constructor () {
    super();
    this.state = {
      imgPath: '/images/banner/BannerImage1.png'
    }
    this.intervalId = 0;
  }

  componentDidMount () {
    let i = 1;
    this.intervalId = setInterval(() => {
      i = i === 5 ? 1 : i + 1;
      this.toggleImages(i)
    }, 5000)
  }

  componentWillUnmount () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleImages = (i) => {
    this.setState(
      { imgPath: `/images/banner/BannerImage${i}.png` })
  }

  render () {
    return (
            <div className={styles.banner} /* style={{ background: `url(${this.state.imgPath})` }} */>
            </div>

    )
  }
}
