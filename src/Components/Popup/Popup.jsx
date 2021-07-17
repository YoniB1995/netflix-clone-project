import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const PopupBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  color: black;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    height: 100%;
    position: relative;
    width: 70%;
    left: 20px;
  }
`;

const InsidePop = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  border-radius: 25px;
  background-color: white;

  button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export default function Popup(props) {
  return props.trigger ? (
    <PopupBody>
      <InsidePop>
        <Button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </Button>
        {props.children}
      </InsidePop>
    </PopupBody>
  ) : (
    ""
  );
}
