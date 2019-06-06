import React, { Component } from 'react';
export default class Portfolio extends Component{
  render() {
    return (
      <React.Fragment>
 			<section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><strong>Projects</strong></h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <img alt="ambii_logo" src="images/portfolio/Ambii_profile.png" style={{ width: "215px", height: "161px" }} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Ambii</h5>
                        <p>Music Social Jukebox</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02">
                    <img alt="EveryReceipt_image" src="images/portfolio/Receipt_logo.jpg" style={{ width: "215px", height: "161px" }}/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>EveryReceipt</h5>
                        <p>Receipt Tracking App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
            </div> 
          </div> 

          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m_ambii.png" alt="ambii_modal_logo" />
            <div className="description-box">
              <h4>Ambii</h4>
              <p>
                Ambii is a music streaming platform built for group listening.
              </p>
              <span className="categories"><i className="fa fa-tag" />Web Developer, Work Experience</span>
            </div>
            <div className="link-box">
              <a href="https://www.ambii.io/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m_receipt.jpg" alt="everyReceipt_modal_logo" />
            <div className="description-box">
              <h4>EveryReceipt</h4>
              <p>
                Using OpenCV and React Native, this app tracks expenses from receipts.
              </p>
              <span className="categories"><i className="fa fa-tag" />React-Native, School Project</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/liamLacuna/EveryReceipt">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div> 
      </section> 
      </React.Fragment>
    );
    }
};