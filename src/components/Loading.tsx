export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white text-xl font-bold">N 52°</span>
        </div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
