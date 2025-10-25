import React from "react";
import styled from "styled-components";
import "./Button.css";

const Button = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="grid-bg">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>
        <div className="button-container">
          <button className="hacker-button" data-text="Infiltrate">
            <div className="neon-frame" />
            <div className="circuit-traces">
              <div className="circuit-trace" />
              <div className="circuit-trace" />
              <div className="circuit-trace" />
              <div className="circuit-trace" />
              <div className="circuit-trace" />
            </div>
            <div className="code-fragments">
              <span className="code-fragment">Leadership</span>
              <span className="code-fragment">Negotiation</span>
              <span className="code-fragment">DATA</span>
              <span className="code-fragment">CODE</span>
              <span className="code-fragment">Product Knowledge</span>
              <span className="code-fragment">Self Motiveted</span>
            </div>
            <div className="interference" />
            <div className="scan-bars">
              <div className="scan-bar" />
              <div className="scan-bar" />
              <div className="scan-bar" />
            </div>
            <div className="text-glow" />
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .grid-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    pointer-events: none;
    z-index: -1;
    background: repeating-linear-gradient(
        0deg,
        rgba(9, 42, 2, 0.15) 0px,
        rgba(17, 130, 0, 0.15) 1px,
        transparent 1px,
        transparent 15px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(9, 42, 2, 0.15) 0px,
        rgba(17, 130, 0, 0.15) 1px,
        transparent 1px,
        transparent 15px
      );
  }

  .grid-line {
    position: absolute;
    background: rgb(65, 13, 237);
    opacity: 0.5;
    animation: grid-flow 2.5s linear infinite;
  }

  .grid-line:nth-child(odd) {
    width: 40%;
    height: 1px;
  }
  .grid-line:nth-child(even) {
    height: 70%;
    width: 1px;
  }
  .grid-line:nth-child(1) {
    top: 15%;
  }
  .grid-line:nth-child(2) {
    left: 25%;
  }
  .grid-line:nth-child(3) {
    top: 55%;
    animation-delay: -0.8s;
  }
  .grid-line:nth-child(4) {
    left: 65%;
    animation-delay: -1.6s;
  }
  .grid-line:nth-child(5) {
    top: 85%;
    animation-delay: -1.2s;
  }

  /* Button container */
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    position: relative;
    z-index: 1;
 
  }

  /* Main button styles */
  .hacker-button {
    position: relative;
    width: 100%;
    height: 450px;
    font-size: 1.6em;
    font-family: "Courier New", monospace;
    font-weight: bolder;
    color: #e6e6fa; /* Lavender for clear contrast */
    background: rgb(11, 95, 163); /* Dark indigo background */
    border: none;
    border-radius: 0;
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 5px;
    transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease,
      color 0.3s ease;
    z-index: 2;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    text-shadow: 0 0 5pxrgb (173, 13, 40), 0 0 10pxrgb (62, 17, 241); /* Neon glow for readability */
    margin: 3rem;
  }

  /* Neon frame */
  .neon-frame {
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border: 3px solidrgb(213, 29, 32);
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    animation: neon-flicker 1.8s infinite;
    z-index: -1;
    box-shadow: 0 0 15px rgba(16, 53, 236, 0.5);
  }

  /* Circuit traces */
  .circuit-traces {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circuit-trace {
    position: absolute;
    background: rgb(15, 195, 240); /* Brighter indigo */
    opacity: 0.6;
    animation: circuit-flow 1.2s infinite ease-in-out;
  }

  .circuit-trace:nth-child(1) {
    width: 2px;
    height: 40%;
    top: 0;
    left: 15%;
  }
  .circuit-trace:nth-child(2) {
    width: 50%;
    height: 2px;
    top: 25%;
    right: 0;
  }
  .circuit-trace:nth-child(3) {
    width: 2px;
    height: 50%;
    bottom: 0;
    left: 40%;
    animation-delay: -0.4s;
  }
  .circuit-trace:nth-child(4) {
    width: 60%;
    height: 2px;
    bottom: 20%;
    left: 0;
    animation-delay: -0.8s;
  }
  .circuit-trace:nth-child(5) {
    width: 2px;
    height: 30%;
    top: 10%;
    right: 10%;
    animation-delay: -1s;
  }

  /* Code fragments */
  .code-fragments {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .code-fragment {
    position: absolute;
    font-size: 2em;
    color: rgb(43, 9, 236);
    opacity: 0.6;
    animation: code-drift 1.5s infinite;
    text-shadow: 0 0 5pxrgb (72, 5, 255);
  }

  .code-fragment:nth-child(1) {
    top: 5%;
    left: 10%;
    content: "0x1A";
  }
  .code-fragment:nth-child(2) {
    top: 20%;
    right: 15%;
    content: "1100";
    animation-delay: -0.3s;
  }
  .code-fragment:nth-child(3) {
    bottom: 10%;
    left: 20%;
    content: "DATA";
    animation-delay: -0.6s;
  }
  .code-fragment:nth-child(4) {
    bottom: 20%;
    right: 10%;
    content: "CODE";
    animation-delay: -0.9s;
  }
  .code-fragment:nth-child(5) {
    top: 50%;
    left: 50%;
    content: "RUN";
    animation-delay: -1.2s;
  }

  /* Interference waves */
  .interference {
    position: absolute;
    width: 100%;
    height: 15rem;
    background: radial-gradient(
      circle,
      rgba(106, 13, 173, 0.25) 0%,
      transparent 60%
    );
    animation: interference-pulse 2s infinite;
    z-index: 1;
    opacity: 0;
  }

  /* Scan bars */
  .scan-bars {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .scan-bar {
    position: absolute;
    width: 100%;
    height: 5px;
    background: rgba(106, 13, 173, 0.4);
    animation: scan-bar 1.5s infinite ease-in-out;
  }

  .scan-bar:nth-child(1) {
    top: 0;
  }
  .scan-bar:nth-child(2) {
    bottom: 0;
    animation-delay: -0.75s;
    animation-direction: reverse;
  }
  .scan-bar:nth-child(3) {
    top: 50%;
    animation-delay: -0.5s;
  }

  /* Text glow */
  .text-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(230, 230, 250, 0.2) 0%,
      transparent 70%
    );
    opacity: 0;
    animation: text-glow-pulse 2.5s infinite;
    z-index: -1;
  }

  /* Animations */
  @keyframes grid-flow {
    0% {
      transform: translateX(-100%) translateY(-100%);
    }
    100% {
      transform: translateX(100%) translateY(100%);
    }
  }

  @keyframes neon-flicker {
    0%,
    100% {
      opacity: 1;
      box-shadow: 0 0 15px rgba(32, 13, 173, 0.5);
    }
    20% {
      opacity: 0.7;
      box-shadow: 0 0 10px rgba(32, 13, 173, 0.5);
    }
    40% {
      opacity: 0.9;
      box-shadow: 0 0 20px rgba(32, 13, 173, 0.5);
    }
    60% {
      opacity: 0.6;
      box-shadow: 0 0 5px rgba(32, 13, 173, 0.5);
    }
    80% {
      opacity: 0.95;
      box-shadow: 0 0 25px rgba(32, 13, 173, 0.5);
    }
  }

  @keyframes circuit-flow {
    0% {
      transform: scale(0.5) translateX(-30%);
    }
    50% {
      transform: scale(1) translateX(0);
    }
    100% {
      transform: scale(0.5) translateX(30%);
    }
  }

  @keyframes code-drift {
    0% {
      transform: translateY(100%) rotate(-5deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0) rotate(5deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100%) rotate(-5deg);
      opacity: 0;
    }
  }

  @keyframes interference-pulse {
    0%,
    100% {
      transform: scale(0.9);
      opacity: 0;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.6;
    }
  }

  @keyframes scan-bar {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

export default Button;
