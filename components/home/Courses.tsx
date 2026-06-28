import Image from "next/image";

const courses = [
  {
    image: "/courses/uiux.jpg",
    title: "Fundamental Of UI/UX Design",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
  {
    image: "/courses/javascript.jpg",
    title: "Javascript Basic to Advanced",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
  {
    image: "/courses/fullstack.jpg",
    title: "Fullstack Web Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
  {
    image: "/courses/marketing.jpg",
    title: "Digital Marketing",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
  {
    image: "/courses/photography.jpg",
    title: "Photography Basic Rules",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
  {
    image: "/courses/motion.jpg",
    title: "Motion Graphics",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card.",
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Discover Our Popular
            <br />
            Courses
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when
            looking at its layout.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="sm:w-40 h-48 sm:h-auto relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-3 text-sm">
                  {course.description}
                </p>

                <p className="text-blue-500 font-semibold mt-4">
                  Price : 20$
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold transition">
            See More Courses
          </button>
        </div>
      </div>
    </section>
  );
}