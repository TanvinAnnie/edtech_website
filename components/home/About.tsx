import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#f4f8fb] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left Image */}
          <div className="h-full">
            <Image
              src="/slider3.jpg"
              alt="Student"
              width={600}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-[#edf5fa] p-8 md:p-14 h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore The elearning Institute
            </h2>

            <p className="mt-6 text-gray-500 leading-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <p className="mt-5 text-gray-500 leading-8">
              Anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  3.2K+
                </h3>
                <p className="text-gray-500 mt-2">
                  Online Course
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  600+
                </h3>
                <p className="text-gray-500 mt-2">
                  Expert member
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  1K+
                </h3>
                <p className="text-gray-500 mt-2">
                  Rating & Review
                </p>
              </div>
            </div>

            <button className="mt-10 w-fit bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded font-semibold transition">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}