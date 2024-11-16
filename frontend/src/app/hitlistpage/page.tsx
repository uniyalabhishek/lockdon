'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import crosshair from "/Users/jake/LockDon/lockdon/frontend/src/assets/crosshair.svg";
import path from 'path';
import fs from 'fs/promises';

interface Hit {
  target: string;
  approvedAddresses: string[];
  status: string;
  // Add other relevant fields
}

// Add new interface for locks data
interface Lock {
  target: string;
  proofType: string;
  amount: string;
  date: string;
  email: string;
  isGroupTarget: boolean;
  lockAmount: string;
  id: number;
  createdAt: string;
}

export default function HitlistPage() {
  const router = useRouter();
  const [hits, setHits] = useState<Hit[]>([]);
  const [tasks, setTasks] = useState<Lock[]>([]);

  useEffect(() => {
    // Fetch hits from your smart contract
    const fetchHits = async () => {
      try {
        // Implement contract call to get hits
        // const hitsList = await contract.getHits();
        // setHits(hitsList);
      } catch (error) {
        console.error('Error fetching hits:', error);
      }
    };

    // Add new function to fetch locks data from the API
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/locks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchHits();
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="lock-don-text text-2xl">MY HITLIST</h1>
        <button 
          className="lock-don-text text-red-600"
          onClick={() => router.push('/')}
        >
          BACK
        </button>
      </div>

      <div className="grid gap-4 mb-8">
        {hits.map((hit, index) => (
          <div 
            key={index} 
            className="border border-zinc-700 rounded-lg p-4 space-y-2"
          >
            <div className="flex justify-between">
              <span className="lock-don-text">TARGET: {hit.target}</span>
              <span className={`lock-don-text ${
                hit.status === 'active' ? 'text-green-500' : 'text-red-500'
              }`}>
                {hit.status.toUpperCase()}
              </span>
            </div>
            <div className="text-sm text-zinc-400">
              Approved Addresses: {hit.approvedAddresses.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {/* Tasks Table */}
      <div className="mt-12">
        <h2 className="lock-don-text text-xl mb-4">ACTIVE TASKS ({tasks.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="lock-don-text text-left p-4">TARGET</th>
                <th className="lock-don-text text-left p-4">PROOF TYPE</th>
                <th className="lock-don-text text-left p-4">AMOUNT (ETH)</th>
                <th className="lock-don-text text-left p-4">LOCK AMOUNT (ETH)</th>
                <th className="lock-don-text text-left p-4">DUE DATE</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr 
                    key={task.id} 
                    className="border-b border-zinc-700 hover:bg-zinc-900"
                  >
                    <td className="p-4">{task.target}</td>
                    <td className="p-4 text-green-500">{task.proofType}</td>
                    <td className="p-4">{task.amount}</td>
                    <td className="p-4">{task.lockAmount}</td>
                    <td className="p-4">{new Date(task.date).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-zinc-500">
                    No tasks available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 