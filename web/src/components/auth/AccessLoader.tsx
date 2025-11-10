import React from "react";
import { Loader2 } from "lucide-react";

// Interface for component props
interface AccessLoaderProps {
  message?: string;
}

const AccessLoader: React.FC<AccessLoaderProps> = ({
  message = "Loading content, please wait...",
}) => {
  return (
    // Full-page container: Matches the AccessDenied component's layout
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 w-full">
      {/* Content Card: Matches the AccessDenied component's structure */}
      <div className="w-full max-w-xl p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl text-center">
        {/* Spinner Illustration */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Main Icon: Uses the 'animate-spin' utility for rotation */}
          <div className="p-4 rounded-full">
            <Loader2
              className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-spin"
              strokeWidth={2}
            />
          </div>

          {/* Status Text */}
          <div className="text-gray-600 dark:text-gray-400">
            <span className="text-sm font-medium uppercase tracking-widest">
              Processing Request
            </span>
          </div>
        </div>

        {/* --- */}

        {/* Loading Message */}
        <div>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessLoader;
