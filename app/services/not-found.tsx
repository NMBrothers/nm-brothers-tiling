import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Service Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
      </div>
    </div>
  );
}
