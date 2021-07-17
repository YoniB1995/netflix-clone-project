import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faMailBulk,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "semantic-ui-react";
import Popup from "../../Popup/Popup";
// import {iconStyle,profileStyle} from '../Home'

const FooterBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 20vh;
  background: linear-gradient(
    0deg,
    rgba(52, 50, 50, 1) 70%,
    rgba(106, 106, 106, 0) 92%,
    rgba(0, 0, 0, 0) 100%
  );

  .iconThree:hover,
  .iconTwo:hover,
  .iconOne:hover,
  .iconFour:hover {
    opacity: 0.5;
    cursor: pointer;
    border-radius: 50%;
    background: grey;
  }

  .RightSide {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    height: 40vh;
    flex-direction: column;
  }
`;

const DetailsSpan = styled.span`
  :hover {
    cursor: pointer;
    color: white;
    transition: 1s ease-in-out;
  }
`;

export const IconsAlign = styled.span`
  display: inline;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const IconStyle = { fontSize: "30px", margin: "10px", color: "white" };

export const iconStyle = { fontSize: "40px", marginRight: "5px" };
export const profileStyle = {
  height: "150px",
  borderRadius: "30px",
  position: "relative",
  left: "35%",
  boxShadow: "2px 3px 6px #0000006c",
};

export default function Footer() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const profileImg = (
    <img src="images/fixedProfile.jpg" alt="profileImg" style={profileStyle} />
  );
  return (
    <>
      <FooterBody>
        <div className="leftSide">
          {" "}
          <Button onClick={() => setButtonPopup(true)}>About Me :)</Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>About Me</h3>
            <h1>Yoni Bitew</h1>
            <p>
              Born and raised in Hadera. Earned a Matriculation Certificate with
              degrees in Geography and Oral LAW. Joined the Army in 2014. Joined
              the "Kfir" Battle Brigade. Became an Officer Commander managing
              over 120 Soldiers and 20 commanders. In December 2020 , started a
              Web Develepor Program to earn a degree as a Fullstack Web
              Developer
            </p>
            <br />

            <a href="https://www.instagram.com/yonibitew/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                style={IconStyle}
                className="iconOne"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yoni-bitew-955b971bb/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={IconStyle}
                className="iconTwo"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006574396023"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={IconStyle}
                className="iconThree"
              />
            </a>
            <a href="https://github.com/YoniB1995" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                style={IconStyle}
                className="iconFour"
              />
            </a>
            {profileImg}
          </Popup>
        </div>
        <div className="Center">
          <IconsAlign>
            <a href="https://www.instagram.com/yonibitew/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                style={IconStyle}
                className="iconOne"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yoni-bitew-955b971bb/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={IconStyle}
                className="iconTwo"
              />
            </a>
          </IconsAlign>
          <IconsAlign>
            <a
              href="https://www.facebook.com/profile.php?id=100006574396023"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={IconStyle}
                className="iconThree"
              />
            </a>
            <a href="https://github.com/YoniB1995" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                style={IconStyle}
                className="iconFour"
              />
            </a>
          </IconsAlign>
        </div>
        <div className="RightSide">
          <IconsAlign>
            <FontAwesomeIcon icon={faMailBulk} style={IconStyle} />
            <DetailsSpan>yonatansamfisher@gmail.com</DetailsSpan>
          </IconsAlign>
          <IconsAlign>
            <FontAwesomeIcon icon={faPhone} style={IconStyle} />
            <DetailsSpan>0538276526</DetailsSpan>
          </IconsAlign>
        </div>
      </FooterBody>
      <FooterBottom>© 2021 by Yoni_B, Inc.</FooterBottom>
    </>
  );
}
