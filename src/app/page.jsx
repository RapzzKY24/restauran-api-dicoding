import RestaurantList from "@/Components/RestaurantList";
import { getAllRestaurants } from "@/libs/api";

export default async function Page() {
  const restaurant = await getAllRestaurants("list");

  return (
    <div className="mt-6">
      <RestaurantList api={restaurant} />
    </div>
  );
}
