import uuidv4 from 'uuid/v4';
const data = [
  { id: uuidv4(), text: 'todo 1', completed: false },
  { id: uuidv4(), text: 'todo 2', completed: false },
  { id: uuidv4(), text: 'todo 3', completed: false }
];
const delay = ms => new Promise(res => setTimeout(res, ms));

export const fetchTodos = () => delay(2500).then(() => data);
