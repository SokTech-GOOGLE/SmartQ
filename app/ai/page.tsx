export default function AI() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">SmartQ AI Assistant</h2>

      <textarea
        placeholder="Ask SmartQ AI anything..."
        className="w-full border p-3 rounded mb-4"
        rows={4}
      />

      <button className="bg-green-600 text-white px-6 py-3 rounded w-full">
        Ask AI
      </button>
    </div>
  );
}
