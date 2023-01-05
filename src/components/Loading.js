import styled from 'styled-components';

const LoadingLayout = styled.section.withConfig({componentId:"LoadingLayout"})`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .progressing {
    font-family: monospace;
    color: #FFF;
    border: 3px solid #fe5137;
    margin-top: 20px;
    border-radius: 25px;
    width: 200px;
    height: 25px;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    z-index: 0;

    &:after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #FFA831;
      width: 0%;
      height: 100%;
      transform-origin: right;
      animation: loading 2s linear both;
      z-index: 1;
    }

    p {
      margin: 0;
      color: #fff;
      position: absolute;
      z-index: 2;
      text-align: center;
      width: 100%;
      line-height: 150%;
    }
  }

  @keyframes loading {
    0% {
      width: 0%;
    }
    33% {
      width: 33%;
    }
    66% {
      width: 66%;
    }
    100%{
      width: 100%;
    }
  }
`


export default function Loading () {
  return (
    <LoadingLayout>
      <img src="/index_logo.svg" alt="index" />
      <div className='progressing'><p>Loading...</p></div>
    </LoadingLayout>
  )
}