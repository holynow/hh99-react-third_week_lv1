import React, { useState } from 'react';
import GlobalStyle from 'GlobalStyles';
import Layout from './components/Layout';
import Todo from 'components/Todo';
import Input from 'components/Input';
import { v4 as uuidv4 } from 'uuid';
import 'normalize.css';
import 'App.css';


function App() {

  const [title, setTitle] = useState("");
  const [cont, setCont] = useState("");
  const [toDoList, setToDoList] = useState([
    {id: 1, title: '리액트 빡공', cont: '리액트공부해야지...리액트공부해야지...', isDone: false},
    {id: 2, title: '리액트 빡공', cont: '리액트공부해야지...리액트공부해야지...', isDone: false},
    {id: 4, title: 'ToDoList 만들기', cont: '투두리스트 과제', isDone: true}
  ]);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeCont = (e) => setCont(e.target.value);

  //! toDo 추가버튼
  const addBtnHandler = () => {
    if (title.trim() !== '' && cont.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        title,
        cont,
        isDone: false,
      };
      setToDoList([...toDoList, newTodo]);
      setTitle('');
      setCont('');
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };
  //! toDo 삭제버튼
  const removeBtnHandler = (id) => {
    const setNewTodo = toDoList.filter(todo => todo.id !== id);
    setToDoList(setNewTodo);
  }
  //! toDo 완료 취소 버튼
  const toggleDoneHandler = (id) => {
    const updatedList = toDoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setToDoList(updatedList);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Input 
        title={title}
        onChangeTitle={onChangeTitle}
        cont={cont}
        onChangeCont={onChangeCont}
        addBtnHandler={addBtnHandler}
        />
      <div className='todoList-wrap'>
        <div className='working'>
          <h2>🎫 Working..</h2>
          <ul className='working-list'>
            {toDoList
              .filter((item) => !item.isDone)
              .map((item) => (
                <Todo
                  key={item.id}
                  item={item}
                  removeBtn={removeBtnHandler}
                  toggleDone={toggleDoneHandler}
                />
              ))}
          </ul>
        </div>
        <div className='done'>
          <h2>🎟️ Done..!</h2>
          <ul className='working-list'>
            {toDoList
              .filter((item) => item.isDone)
              .map((item) => (
                <Todo
                  key={item.id}
                  item={item}
                  removeBtn={removeBtnHandler}
                  toggleDone={toggleDoneHandler}
                />
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default App