// 명언 봇
import React, { useState } from 'react';
import './App.css';

function Random() {
  const proverbs = ["실패를 생각하기보다 목표를 향해 전진하면 노력한 만큼의 보상이 꼭 주어질 것이다.", "오늘보다 내일 더 나은 사람이 되기위해 노력하자! 하지만 이것은 오직 노력에 의해 가능하다.", "포기하고 싶은 1분, 그 1분을 참아내면 내가 원하는 세상으로 갈 수 있는 문이 열릴 것이다.","실패를 생각하기보다 목표를 향해 전진하면 노력한 만큼의 보상이 꼭 주어질 것이다.", "오늘보다 내일 더 나은 사람이 되기위해 노력하자! 하지만 이것은 오직 노력에 의해 가능하다.", "포기하고 싶은 1분, 그 1분을 참아내면 내가 원하는 세상으로 갈 수 있는 문이 열릴 것이다."]
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length)
  }
  // 함수 선언형도 쓸 수 있다.

  return(
    <div className="randomFooter">{proverbs[getRandomIndex(proverbs.length)]}</div>
  );
}
export default Random;