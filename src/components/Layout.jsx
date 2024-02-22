import React from 'react'

function Layout(props) {
  return (
    <div className='warp'>
      <div className='content-wrap'>
      <div class="aurora-base aurora-one"></div>
      <div class="aurora-base aurora-two"></div>
      <div class="aurora-base aurora-three"></div>
        <header className='header'>
          <h1>오늘 끝내야하는 일</h1>
          <span>From React</span>
        </header>
        {props.children}
      </div>
    </div>
  )
}

export default Layout