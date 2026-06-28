import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const students = [
  {
    image: "/student1.jpg",
    name: "Awlad Hossain",
    role: "UIUX Designer",
  },
  {
    image: "/student2.jpg",
    name: "Jannatul Islam",
    role: "Motion Design",
  },
  {
    image: "/student3.jpg",
    name: "Imran Hossain",
    role: "Graphic Designer",
  },
  {
    image: "/student4.jpg",
    name: "Nishi Akter",
    role: "Web Developer",
  },
];

const reviews = [
  {
    image: "/review1.jpg",
    name: "Awlad Hossain",
    role: "UI Designer",
  },
  {
    image: "/review2.jpg",
    name: "Shanta Akter",
    role: "Graphic Designer",
  },
];

export default function Students() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Student Section */}
        <div className="max-w-xl mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Meet Our Successfull Students
          </h2>

          <p className="text-gray-500 leading-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="border rounded overflow-hidden bg-white hover:shadow-lg transition"
            >
              <Image
                src={student.image}
                alt={student.name}
                width={300}
                height={280}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {student.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {student.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded">
            View All
          </button>
        </div>

        {/* Feedback Section */}
        <div className="mt-28 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Some Students Feedback
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="relative mt-16">
          <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center shadow">
            <ChevronLeft size={20} />
          </button>

          <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow">
            <ChevronRight size={20} />
          </button>

          <div className="grid lg:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border p-8 rounded bg-white"
              >
                <div className="flex justify-between items-center mb-6">
                  <Quote
                    size={45}
                    className="text-gray-300"
                  />

                  <div className="flex gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                <p className="text-gray-500 leading-7 text-sm">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look even slightly believable.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}