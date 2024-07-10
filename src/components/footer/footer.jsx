import React, {useEffect} from "react";
import "./footer.css";
import video2 from "../../Assets/video(2).mp4";
import { FiChevronsRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ducimus porro autem dignissimos, mollitia eos reiciendis
              consequuntur libero laboriosam ut facilis, illo ipsam dolore
              aliquam maiores molestias labore eveniet illum.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
              {/* Group one */}
              <div data-aos="fade-up"  data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">OUR AGENCY</span>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Payment
                </li>
              </div>

              {/* Group two */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">PARTNERS</span>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  BOOKINGS
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  RENTCARS
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  HOSTEL-WORLD
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  TRIVAGO
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  TripAdvisor
                </li>
              </div>

              {/* Group three */}
              <div data-aos="fade-up"  data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">LAST MINUTE</span>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Calfornia
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  India
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Indonesia
                </li>

                <li className="footerList flex">
                  <FiChevronsRight className="icon" />
                  Europe
                </li>
              </div>
          </div>

          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE HERE</small>
              <small>COPYRIGHTS RESERVED-AMAN</small>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Footer;
