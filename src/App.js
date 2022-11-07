import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const baseUrl = "http://localhost:8000"

  const [categories, SetCategories] = useState([])

  const titleRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()

  useEffect(() => {
    fetch(`${baseUrl}/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Add new todo..' />
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <select name="category_id" id="category_id">
          {categories.map((category) => }
          {/* {categories.map((category) => (
            <option key={category.id}>{category}</option>
          )} */}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
