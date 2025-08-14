import React, { useState, useEffect } from "react";
import { X, Info } from "lucide-react";

/**
 * Simple Cookie Notice Component
 * Minimal, informational banner for portfolio websites that don't use tracking cookies
 * Complies with privacy laws while being honest about actual cookie usage
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already acknowledged the notice
  useEffect(() => {
    const acknowledged = localStorage.getItem("cookie-notice-acknowledged");
    if (!acknowledged) {
      // Show notice after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  /**
   * Handle acknowledging the cookie notice
   * Simply stores that user has seen the notice
   */
  const handleAcknowledge = () => {
    localStorage.setItem("cookie-notice-acknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <div
        className="max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 pointer-events-auto animate-slide-up"
        data-testid="cookie-notice"
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                Cookie Notice
              </h3>
            </div>
            <button
              onClick={handleAcknowledge}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex-shrink-0"
              data-testid="close-cookie-notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            This portfolio website uses only essential cookies necessary for
            basic functionality. We don't track you or collect personal data.
          </p>

          {/* Action Button */}
          <button
            onClick={handleAcknowledge}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            data-testid="acknowledge-cookies"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
