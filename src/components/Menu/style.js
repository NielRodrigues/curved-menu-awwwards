import { styled, keyframes } from "styled-components";

export const Animation = keyframes`
  0%{
    width: 0px;
    left: 0px;
  }

  10%{
    width: 15px;
    left: -7.5px;
  }

  15%{
    width: 25px;
    left: -12.5px;
  }

  25%{
    width:  50px;
    left: -25px;
  }

  50%{
    width: 100px;
    left: -50px;
  }

  60%{
    width: 50px;
    left: -25px;
  }

  75%{
    width: 25px;
    left: -12.5px;
  }

  90%{
    width: 15px;
    left: -7.5px;
  }

  100%{
    width: 0px;
    left: 0px;
  }
`;

export const Animation2 = keyframes`
  0%{
    width: 15px;
    left: -7.5px;
  }

  10%{
    width: 25px;
    left: -12.5px;
  }

  25%{
    width:  50px;
    left: -25px;
  }

  50%{
    width: 100px;
    left: -50px;
  }

  60%{
    width: 50px;
    left: -25px;
  }

  75%{
    width: 25px;
    left: -12.5px;
  }

  90%{
    width: 15px;
    left: -7.5px;
  }

  100%{
    width: 0px;
    left: 0px;
  }
`;

export const Container = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #1d1b1b;
  transition: all .4s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 999;

  &.active{
    background-color: #455CE9;
  }

  &:before{
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 150%;
    height: 0;
    border-radius: 50%;

    background-color: #455CE9;
    z-index: -1;

    transition: all .7s ease;
  }

  &:hover{
    &:before{
      height: 350%;
    }
  }
`;

export const BurgerIcon = styled.div`
  width: 36px;
  height: 16px;
  overflow: hidden;
  position: relative;
  transition: all .7s ease;

  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #c0bfbf;
    top: 3px;
    left: 0;
    transition: all .7s ease;
  }

  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #c0bfbf;
    bottom: 3px;
    left: 0;
    transition: all .7s ease;
  }

  &.burgerActive {
    &:before{
      top: 7px;
      transform: rotate(-45deg);
    }

    &:after{
      bottom: 7px;
      transform: rotate(45deg);
    }
  }
`;

export const Nav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 400px;
  background-color: #1d1b1b;
  background-color: #1d1b1b;
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 1;
  transition: all .8s cubic-bezier(0.76, 0, 0.24, 1);

  h3.menu{
    font-size: 10px;
    font-weight: 600;
    padding-bottom: 24px;
    width: 80%;
    color: #c0bfbf;
    margin: 0;
    border-bottom: 1px solid #333333;
    margin-bottom: 48px;
  }

  &:before{
    content: '';
    width: 0px;
    height: 120vh;
    background-color: #1d1b1b;
    position: absolute;
    top: -10vh;
    left: 0px;
    border-radius: 50%;
    transition: all 1s cubic-bezier(0.76, 0, 0.24, 1);
    z-index: -1;
  }

  &.active{
    &:before{
      animation: ${Animation} .9s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }

  &.desactive{
    &:before{
      animation: ${Animation2} .9s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }

`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  a{
    text-decoration: none;
    font-size: 48px;
    color: white;
    margin: 0;
  }
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 4px;
  margin-top: 56px;

  h3.media{
    font-size: 12px;
    color: #c0bfbf;
    margin: 0;
  }

  div.media{
    display:  flex;
    align-items: center;
    gap: 8px;

    a{
      text-decoration: none;
      font-size: 14px;
      color: white;
      margin: 0;
    }
  }
`;
