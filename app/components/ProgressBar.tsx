// app/components/ProgressBar.tsx

import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number; // Update this to reflect how many total steps the user could take
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-4">
      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm mt-1">{`Step ${currentStep} of ${totalSteps}`}</p>
    </div>
  );
};

export default ProgressBar;
