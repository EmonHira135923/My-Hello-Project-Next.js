// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
            <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
            <div className="bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute mb-24">
                Page Not Found
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Lost in space?</h2>
                <p className="mt-4 text-gray-500 max-w-md">
                    The page you are looking for doesn't exist in 
                    <span className="font-semibold text-gray-700"> my-hello-project</span>.
                </p>
            </div>

            <div className="mt-10">
                <Link 
                    href="/dashboard" 
                    className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all inline-block"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}