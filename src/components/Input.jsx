import React from 'react'

function Input(props) {
    return (
        <div className='input-wrap'>
            <label><input type='text' placeholder='제목을 입력하세요.' value={props.title} onChange={props.onChangeTitle}></input></label>
            <label><input type='text' placeholder='내용을 입력하세요.' value={props.cont} onChange={props.onChangeCont}></input></label>
            <button onClick={props.addBtnHandler}>할일 추가</button>
        </div>
    )
}

export default Input