const Wrong = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Icon Container */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: '#3754DB20' }}>
              <svg 
                className="w-12 h-12" 
                style={{ color: '#3754DB' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60" style={{ backgroundColor: '#3754DB40' }}></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full opacity-40" style={{ backgroundColor: '#3754DB30' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Oops! Something Went Wrong
          </h1>
          
          <p className="text-gray-600 text-lg">
            We encountered an unexpected error. Don't worry, it's not your fault.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: '#3754DB' }}
            >
              Try Again
            </button>
            
            <button 
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 border-2"
              style={{ borderColor: '#3754DB40' }}
            >
              Go Home
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 pt-4">
            If the problem persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wrong;