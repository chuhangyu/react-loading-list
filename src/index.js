import React from 'react';
import 'intersection-observer-polyfill';

const { useState, useEffect } = React;

function App(props) {
  const { item, loadingImg, bottom } = props;

  function oberserve(entries) {
    if (entries[0].intersectionRatio > 0) {
      console.log('出现了')
    } else {
      console.log('消失了')
    }
  }
  
  useEffect(() => {
    const node = document.getElementById("bottom");
    const options = {}
    const observer = new IntersectionObserver(oberserve, options);
    observer.observe(node);
  }, []);

  return (
    <div>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <div id="bottom">bottom</div>
      <div style={{height: 200, width: '100%', background:'red'}}></div>
    </div>
  )
}

export default App;