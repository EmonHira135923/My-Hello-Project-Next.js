export default function Loading() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="p-6">
      <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skeletons.map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
            <div className="aspect-[4/3] bg-gray-200"></div>
            <div className="p-5 space-y-4">
              <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded-md w-full"></div>
                <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded-xl w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}