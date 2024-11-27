export default function TaskList({ tasks }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mt-6">
        {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Task List</h2> */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-400">
              <th className="p-3 text-left">Task ID</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
              >
                <td className="p-3">{task.id}</td>
                <td className="p-3">{task.title}</td>
                <td className="p-3">{task.priority}</td>
                <td className="p-3">{task.status}</td>
                <td className="p-3">
                  <button className="text-blue-500 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }