export default function Home() {
  return (
    <section className="text-center mt-20">
      <h2 className="text-4xl font-bold mb-4">
        Ask Smart Questions. Get Smart Answers.
      </h2>
      <p className="text-gray-600 mb-8">
        SmartQ helps you learn faster using AI-powered answers.
      </p>

      <div className="space-x-4">
        <a
          href="/ask"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Ask a Question
        </a>

        <a
          href="/ai"
          className="border px-6 py-3 rounded"
        >
          Try SmartQ AI
        </a>
      </div>
    </section>
  );
}
