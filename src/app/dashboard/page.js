'use client';

import { useState } from 'react';
import TaskTable from '../components/TaskTable';
//import DashboardSummary from '@/components/DashboardSummary';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      {/* <DashboardSummary tasks={tasks} /> */}
      <TaskTable tasks={tasks} onAddTask={handleAddTask} />
    </div>
  );
}
