import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./index.module.scss"

export default function JanusFooter() {
  return (
    <div className={styles.root}>
      <div className="footer_content">
        <div className="footer_menu">
          <ul>
            <li className="footer_menu_title">
              <span>COMMON LINKS</span>
            </li>
            <li>
              <a
                target="_blank"
                href="http://physics.zju.edu.cn/"
                rel="noreferrer"
              >
                School of Computer Science, Zhejiang University
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.cs.zju.edu.cn/"
                rel="noreferrer"
              >
                School of Physics, Zhejiang University
              </a>
            </li>
          </ul>
          <ul>
            <li className="footer_menu_title">
              <span>USER GUIDE</span>
            </li>
            <li>
              <Link to="/home/document">USER GUIDE</Link>
            </li>
            <li></li>
          </ul>
          <ul>
            <li className="footer_menu_title">
              <span>QUANTUM APPLICATIONS</span>
            </li>
            <li>
              <Link to="/notFound">Solutions</Link>
            </li>
          </ul>
          <div className="footer_phone">
            <p className="footer_phone_title">CONTACT US</p>
            <p>Address: Xixi Campus of Zhejiang University</p>
            <p>Telephone:0571-81951139</p>
            <p>Zip code:310028</p>
          </div>
          {/* <div className='footer_commen_btn'>加入我们</div> */}
        </div>
        <div className="footer_ban_quan">
          Copyright © Zhejiang University Quantum Computing. All rights reserved
          <span style={{ marginLeft: "20px" }}>
            {/* All rights reserved */}
          </span>
        </div>
      </div>
    </div>
  )
}
