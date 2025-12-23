export default function AskPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>

      <textarea
        className="w-full border p-3 rounded mb-4"
        rows={4}
        placeholder="Type your question here..."
      />

      <select className="w-full border p-3 rounded mb-4">
        <option>Education</option>
        <option>Technology</option>
        <option>Business</option>
        <option>Faith</option>
        <option>Relationships</option>
      </select>

      <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">
        Submit Question
      </button>
    </div>
  );
}
