const Todo = ({item, removeBtn, toggleDone}) => {
    return (
      <li key={item.id} className={item.isDone ? 'true' : ''}>
        <h3>{item.title}</h3>
        <p>{item.cont}</p>
        <div className='btn-wrap'>
          <button onClick={()=>removeBtn(item.id)}>삭제하기</button>
          <button onClick={()=>toggleDone(item.id)}>{item.isDone ? '취소' : '완료'}</button>
        </div>
      </li>
      );
  }

  export default Todo;