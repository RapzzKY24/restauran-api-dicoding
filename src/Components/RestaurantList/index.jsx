const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const RestaurantList = ({ api }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-4">
      {api.restaurants?.map((restaurant, indeks) => {
        return (
          <Link
            key={indeks}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            href={`/detail/${restaurant.id}`}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-40">
              <Image
                src={`${process.env.NEXT_PUBLIC_RESTAURANT_IMAGE_BASE_URL}/${restaurant.pictureId}`}
                alt={restaurant.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg text-slate-700 font-semibold mb-1 truncate">
                {restaurant.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {restaurant.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-yellow-500 font-bold">
                  {restaurant.rating}★
                </span>
                <span className="text-gray-500 text-sm">{restaurant.city}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
