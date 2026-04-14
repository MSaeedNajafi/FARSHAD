import { useState } from 'react';

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);

  return (
    <div className="mx-auto my-16 max-w-4xl px-6">
      <h2 className="mb-8 text-center text-3xl font-bold">Voor & Na</h2>

      <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
        {/* AFTER */}
        <img
          src="/floor1.jpg"
          className="absolute inset-0 size-full object-cover"
          alt="after"
        />

        {/* BEFORE */}
        <img
          src="/floor2.jpg"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${position}%` }}
          alt="before"
        />

        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute bottom-4 w-full"
        />
      </div>
    </div>
  );
};

export { BeforeAfter };
