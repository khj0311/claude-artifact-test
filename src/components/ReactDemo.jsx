import { useState } from 'react';

const ReactDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 배우기', completed: false },
    { id: 2, text: '컴포넌트 만들기', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false
        }
      ]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">리액트 데모</h1>
      
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">카운터</h2>
        <div className="flex items-center justify-center">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-l-lg hover:bg-red-600"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="px-6 py-2 border-t border-b text-xl">
            {count}
          </span>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>

      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">할 일 목록</h2>
        
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
            placeholder="할 일 추가..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            onClick={handleAddTodo}
          >
            추가
          </button>
        </div>
        
        <ul className="space-y-2">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mr-3 h-5 w-5"
                />
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                  {todo.text}
                </span>
              </div>
              <button
                className="px-2 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReactDemo;