"use server";
import { addReview, getAllRestaurants } from "@/libs/api";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaLocationArrow } from "react-icons/fa";
import FormReview from "@/Components/form-riview/FormReview";

const Page = async ({ params }) => {
  const { id } = params;
  const resto = await getAllRestaurants(`detail/${id}`);
  const restaurant = resto.restaurant;

  return (
    <div className="bg-slate-500 min-h-screen">
      {/* Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          {/* Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow">
            <Image
              src={`${process.env.NEXT_PUBLIC_RESTAURANT_IMAGE_BASE_URL}/${restaurant.pictureId}`}
              alt={restaurant.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-4">
                {restaurant.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="flex items-center gap-2 text-yellow-700 font-medium text-sm bg-yellow-100 px-3 py-1 rounded-full">
                  <FaStar /> {restaurant.rating}
                </span>
                <span className="flex items-center gap-2 text-blue-700 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  <FaMapMarkerAlt /> {restaurant.city}
                </span>
                <span className="flex items-center gap-2 text-green-700 text-sm bg-green-100 px-3 py-1 rounded-full">
                  <FaLocationArrow /> {restaurant.address}
                </span>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {restaurant.description}
              </p>

              {/* Categories like tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {restaurant.categories?.map((cat) => (
                  <span
                    key={cat.name}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <button className="w-full sm:w-auto bg-[#c0392b] hover:bg-[#a93226] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md">
                🍴 Pesan Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Menu & Review Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Makanan */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🍽️ Makanan</h2>
            <div className="grid grid-cols-2 gap-3">
              {restaurant.menus?.foods?.map((food) => (
                <div
                  key={food.name}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  {food.name}
                </div>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex-1">
              <h1 className="font-bold text-gray-800 mb-4 text-xl">
                😍 Review
              </h1>
              <div className="flex flex-col gap-4">
                {restaurant.customerReviews?.map((riview, idx) => (
                  <div
                    key={riview.name + idx}
                    className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition text-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {riview.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {riview.name}
                        </div>
                        <div className="font-semibold text-amber-950">
                          {riview.review}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {riview.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl shadow-md p-6">
              <FormReview restaurantId={restaurant.id} />
            </div>
          </div>

          {/* Minuman */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🥤 Minuman</h2>
            <div className="grid grid-cols-2 gap-3">
              {restaurant.menus?.drinks?.map((drink) => (
                <div
                  key={drink.name}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  {drink.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          © 2025 {restaurant.name}. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Page;
