import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, titleSet] = useState('state란 무엇인가');
  let [count, countSet] = useState(0)
  let [post, postSet] = useState(["Re-act", "JS", "CSS"])
  let day = "11월 3일 발행"


  function postMixer(){

    let re_post = [...post]
    // spread-operator(전개구문)
    // deep-copy

    re_post[0] = "DOM";
    postSet(re_post);
  }
  function countClick(){
    countSet(
      count === 9? count = 1 : count++
    );
  }

  let [modal, modalSet] = useState(false);
  function modalSwitch(){
    if(modal === false){
      modalSet(true);
    }else{
      modalSet(false);
    }
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={postMixer}>제목 바꾸기</button>
      <div className="list">
        <h4> { post[0] } <span onClick={countClick}>🧡</span>{count}</h4>
        <p> { day } </p>
        <hr/>
      </div>
      <button onClick={modalSwitch}></button>
      {
        modal === true 
        ? <Modal post = {post}></Modal>
        : null
        // html 요소가 없을 때는 null을 사용한다!
      }
    </div>
   );
}

function Modal(props) {
  return(
    <>
      <div className="modal">
        <h2>props.post[]</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}
export default App;
/*
1. 두 개 합쳐서 어떻게 선언해야하나요 ㅜㅜ 
2. 합쳐서 선언했을 때도 post.map()~ 이런식으로 그냥 쓰면 될까요? 

===========================================================

const [post, setPost]  = useState (
    { name: '다다', like:0},
    { name: '가가', like:0},
    { name: '나나', like:0}
  );

 

{
        post.map( (a, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{setModalNumber(i);setModal(!modal)} }> { a } </h3>
              <span onClick={ ()=>{countUp(i)} }> 🧡 </span> { like[i] }  
              <p> 8월 19일 발행 </p>
              <hr />
            </div>
          )
        } )
      }
*/