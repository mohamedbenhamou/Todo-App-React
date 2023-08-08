import React, { useState } from 'react';

export default function TaskForm() {
    const [taskNane,setTaskName] = useState('');
  return (
    <form>
      <button>+</button>
      <input type="text" placeholder="Your next task" value={taskNane} onChange={(ev)=>setTaskName(ev.target.value)} />
    </form>
  );
}
