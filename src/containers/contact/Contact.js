import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                    style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: "500"
                }}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: "500"
                }}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Abhishek Kumar"
              src={require("../../assets/images/abhishek.jpeg")}
              style={{
                      width: "100%",
                      maxWidth: "320px",
                      height: "360px",
                      objectFit: "cover",
                      borderRadius: "25px",
                      border: "6px solid #55198b",
                      boxShadow: "0 15px 40px rgba(85, 25, 139, 0.4)",
                      marginLeft: "300px",
                      // marginTop: "40px",
                      display: "block"  // ⬅️ YE ADD KARO
                    }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}