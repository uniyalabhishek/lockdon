'use client';

import { useState } from 'react';

export default function LockDonForm() {
  const [target, setTarget] = useState('');
  const [steps, setSteps] = useState('');
  const [date, setDate] = useState('');
  const [lockAmount, setLockAmount] = useState('');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="lock-don-text text-xl">NEW TARGET / JOIN GROUP TARGET</h2>
        </div>
      </div>

      <div className="space-y-2">
        <label className="lock-don-text">TARGET</label>
        <input 
          type="text" 
          className="input-field"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="lock-don-text">PROOF:</label>
        <div className="flex gap-2">
          <button className="input-field">EMAIL</button>
          <button className="input-field">WEBSITE</button>
          <button className="input-field">FITNESS</button>
          <button className="input-field">GITHUB</button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="lock-don-text">I WILL WALK..</label>
        <div className="flex gap-4">
          <input 
            type="number" 
            className="input-field" 
            placeholder="STEPS"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          <input 
            type="date" 
            className="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-5 h-5 bg-zinc-800 border-zinc-700" />
        <label className="lock-don-text">GROUP TARGET</label>
      </div>

      <div className="space-y-2">
        <label className="lock-don-text">LOCK</label>
        <input 
          type="number" 
          className="input-field" 
          placeholder="ETH"
          value={lockAmount}
          onChange={(e) => setLockAmount(e.target.value)}
        />
      </div>

      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md lock-don-text">
        LOCK DON
      </button>
    </div>
  );
} 