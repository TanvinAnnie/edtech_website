export default function Register() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-sky-500  border-gray-200 rounded-md px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          
          <div className=" max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to join?
            </h2>

            <p className="text-sm md:text-base text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <button className="bg-white text-blue-500 border-white font-semibold px-8 py-3 rounded hover:bg-sky-600 transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}