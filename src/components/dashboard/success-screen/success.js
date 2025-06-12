import { useEffect, useState } from 'react';

export default function SuccessMessage({
  trigger,
  duration = 3000,
  message = 'Successfully Created!',
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center  ">
      <div className="mt-10 rounded-md bg-green-100 px-6 py-3 shadow-lg">
        <p className="text-lg font-semibold text-green-800">{message}</p>
      </div>
    </div>
  );
}

