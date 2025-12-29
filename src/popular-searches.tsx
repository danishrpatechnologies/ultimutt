import { motion } from "framer-motion";
import popular from "/images/popular-arrow.png";

const searches = [
  "Consultation for Dog Near Me",
  "Grooming for Dog Near Me",
  "Vaccination for Dog Near Me",
  "Surgery for Dog Near Me",
  "Emergency Care for Dog Near Me",
  "Consultation for Cat Near Me",
  "Grooming for Cat Near Me",
  "Vaccination for Cat Near Me",
  "Surgery for Cat Near Me",
  "Emergency Care for Cat Near Me",
  "Pet Clinic in Gurgaon",
  "Pet Clinic in Delhi",
  "Pet Clinic in Hyderabad",
  "Pet Clinic in Mumbai",
  "Pet Clinic in Chennai",
  "Pet Clinic in Noida",
  "Pet Clinic in Ghaziabad",
  "Pet Clinic in Bangalore",
  "Pet Clinic in Pune",
  "Pet Clinic in Faridabad",
  "Pet Clinic in Kolkata",
  "Pet Consultation in Gurgaon",
  "Pet Consultation in Bangalore",
  "Pet Consultation in Chennai",
  "Pet Consultation in Delhi",
  "Pet Consultation in Hyderabad",
  "Pet Consultation in Mumbai",
  "Pet Consultation in Ghaziabad",
  "Pet Consultation in Pune",
  "Pet Consultation in Faridabad",
  "Pet Consultation in Noida",
  "Pet Consultation in Kolkata",
  "Pet Grooming in Bangalore",
  "Pet Diagnostics in Bangalore",
  "Pet Surgery in Delhi",
  "Pet Emergency Care in Mumbai",
  "Pet Clinic in Golf Course Road, Gurgaon",
  "Pet Clinic in Sector 45, Gurgaon",
  "Pet Clinic in Sohna Road, Gurgaon",
  "Pet Clinic in Galleria Market, Gurgaon",
  "Pet Clinic in Sector 57, Gurgaon",
  "Pet Clinic in Sector 82, Gurgaon",
];

export default function PopularSearches() {
  return (
    <div className="mx-auto flex flex-col max-w-full items-start py-12 md:px-[100px] px-[20px]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 w-full justify-between">
        <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold">
          Popular Searches
        </h2>
        <img
          src={popular}
          alt="Popular"
          className="aspect-square w-[100px] h-[18px] opacity-50 hidden md:block"
        />
      </div>

      {/* Searches */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:text-[16px] sm:text-[14px] font-regular flex flex-wrap"
      >
        {searches.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center whitespace-nowrap mr-4 mb-3"
          >
            <motion.a
              whileHover={{ color: "#d32f2f" }}
              transition={{ duration: 0.15 }}
              href="https://ultimutt.in/"
              className={
                item === "Pet Grooming in Hyderabad"
                  ? "text-red-600"
                  : "text-black"
              }
            >
              {item}
            </motion.a>

            {index !== searches.length - 1 && (
              <span className="mx-2 text-gray-400">|</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
