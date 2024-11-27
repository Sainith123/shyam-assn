'use client';

import { useState } from 'react';
import TaskList from '../components/TaskList';
//import DashboardSummary from '@/components/DashboardSummary';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">TaskList</h1>
      {/* <DashboardSummary tasks={tasks} /> */}
      <TaskList tasks={tasks} onAddTask={handleAddTask} />
    </div>
  );
}