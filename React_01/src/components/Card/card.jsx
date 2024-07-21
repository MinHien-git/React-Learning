/* eslint-disable no-unused-vars */

import { TagContainer } from "../TagContainer/tagContainer";

/* eslint-disable react/prop-types */
let t = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, b, c } = t;
export function Card({ todo, handleDelete }) {
  return (
    <div key={todo.id} className="todo-item">
      {todo.name}
      <button onClick={handleDelete}>Xoá</button>
      <TagContainer tags={todo.tags} />
    </div>
  );
}
