import React, { useState } from 'react';

export default function TaskForm({onAdd}) {
    const [taskNane,setTaskName] = useState('');
    const handleSubmit = (ev) => {
        ev.preventDefault();
        onAdd(taskNane);
        setTaskName('');

    }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input type="text" placeholder="Your next task" value={taskNane} onChange={(ev)=>setTaskName(ev.target.value)} />
    </form>
  );
}
