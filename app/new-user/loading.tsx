const loading = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-600">
          Loading...🪙🪙
        </h2>
      </div>
    </div>
  );
};

export default loading;
