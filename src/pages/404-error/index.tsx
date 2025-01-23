//we will edit this with routes folder
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-4">The page you are looking for might have been removed or temporarily unavailable.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
