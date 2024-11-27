// export default function TaskTable({ tasks }) {
//     return (
//       <div className="bg-white rounded-lg shadow-md p-4 mt-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Task List</h2>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-blue-400">
//               <th className="p-3 text-left">Task ID</th>
//               <th className="p-3 text-left">Title</th>
//               <th className="p-3 text-left">Priority</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task, index) => (
//               <tr
//                 key={task.id}
//                 className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
//               >
//                 <td className="p-3">{task.id}</td>
//                 <td className="p-3">{task.title}</td>
//                 <td className="p-3">{task.priority}</td>
//                 <td className="p-3">{task.status}</td>
//                 <td className="p-3">
//                   <button className="text-blue-500 hover:underline">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
  

'use client';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Summary Calculations
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Finished').length;
  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;

  const percentageCompleted = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;
  const percentagePending = totalTasks > 0 ? ((pendingTasks / totalTasks) * 100).toFixed(2) : 0;

  const averageTimeCompleted = tasks
    .filter(task => task.status === 'Finished')
    .reduce((acc, task) => acc + parseFloat(task.totalTime), 0) / (completedTasks || 1);

  const totalPendingTime = tasks
    .filter(task => task.status === 'Pending')
    .reduce((acc, task) => acc + (new Date(task.endTime) - new Date(task.startTime)) / (1000 * 60 * 60), 0);

  const totalTimeToFinishPending = tasks
    .filter(task => task.status === 'Pending')
    .reduce((acc, task) => acc + parseFloat(task.totalTime), 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* <h1 className="text-3xl font-bold mb-6">Dashboard</h1> */}

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Completed Tasks</h2>
          <p className="text-2xl font-bold">{percentageCompleted}%</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Pending Tasks</h2>
          <p className="text-2xl font-bold">{percentagePending}%</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Average Time (Completed)</h2>
          <p className="text-2xl font-bold">{averageTimeCompleted.toFixed(2)} hrs</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Pending Tasks (Total)</h2>
          <p className="text-2xl font-bold">{pendingTasks}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Time Lapsed</h2>
          <p className="text-2xl font-bold">{totalPendingTime.toFixed(2)} hrs</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Estimated Time to Finish</h2>
          <p className="text-2xl font-bold">{totalTimeToFinishPending.toFixed(2)} hrs</p>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Task ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Priority</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Start Time</th>
              <th className="border border-gray-300 px-4 py-2">End Time</th>
              <th className="border border-gray-300 px-4 py-2">Total Time (hrs)</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td className="border border-gray-300 px-4 py-2">{task.id}</td>
                <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                <td className="border border-gray-300 px-4 py-2">{task.priority}</td>
                <td className="border border-gray-300 px-4 py-2">{task.status}</td>
                <td className="border border-gray-300 px-4 py-2">{task.startTime}</td>
                <td className="border border-gray-300 px-4 py-2">{task.endTime}</td>
                <td className="border border-gray-300 px-4 py-2">{task.totalTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
