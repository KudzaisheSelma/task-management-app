'use client';
import { useState } from 'react';

const INITIAL_BOARDS = [
  { id: '1', title: 'Product Roadmap', taskCount: 12 },
  { id: '2', title: 'Sprint 1', taskCount: 8 },
  { id: '3', title: 'Bug Tracker', taskCount: 5 },
];

export default function Boards() {
  const [boards, setBoards] = useState(INITIAL_BOARDS);
  const [newBoard, setNewBoard] = useState('');

  const addBoard = () => {
    if (!newBoard.trim()) return;
    setBoards(prev => [...prev, { id: Date.now().toString(), title: newBoard, taskCount: 0 }]);
    setNewBoard('');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Boards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {boards.map(board => (
          <div key={board.id} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold">{board.title}</h2>
            <p className="text-gray-500 mt-2">{board.taskCount} tasks</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={newBoard} onChange={e => setNewBoard(e.target.value)}
          placeholder="New board name..." className="border rounded-lg px-4 py-2 flex-1" />
        <button onClick={addBoard} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Create</button>
      </div>
    </div>
  );
}
