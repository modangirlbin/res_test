import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const imgUrl = this.props.imgUrl ? this.props.imgUrl : 'src/assets/images/catalog-default-img.gif'
    
    let styles = {
      thum : {
        // backgroundColor: 'yellow'
        // height: '500px',
      },
      tit : {
        display: 'block',
        display: '-webkit-box',
        "-webkit-box-orient": 'vertical',
        "-webkit-line-clamp": '1',
        "text-overflow": 'ellipsis',
        overflow: 'hidden'
      }
    }

    return (
      <li className="col">
          {/* <a href="#"></a> */}
        <div className="card">
          <div className="content-img">
            <Link to={`/detail/${this.props.resId}`}>
            <img src={imgUrl} alt="" style={styles.thum}/>
            </Link>
          </div>
          <div className="content-txt">
            <h3 className="tit" style={styles.tit}><Link to={`/detail/${this.props.resId}`}>{this.props.title ? this.props.title : 'noTitle'}</Link></h3>
            <p className="desc">{this.props.addr ? this.props.addr : '--'}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;