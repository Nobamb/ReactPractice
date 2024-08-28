import logoImg from './logo.png';
import React from 'react';
import './logo.css';

const Logo = () => {

  const eventLogo = (e) =>{

    e.preventDefault();

    
    console.log(e.val())

  }


  return (
    <a href="/" className='logo' onClick={eventLogo}>
      <img src={logoImg} alt="리액트 빵집 로고" />
      리액트 빵집
      <div><span>고소하고 풍미있는 빵들이 가득한 리액트 빵집으로 오세요</span></div>
    </a>
  )

}


export default Logo;