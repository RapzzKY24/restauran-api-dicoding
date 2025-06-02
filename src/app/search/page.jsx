import RestaurantList from "@/Components/RestaurantList";
import Header from "@/Components/RestaurantList/header";
import { searchRestaurantByName } from "@/libs/api";
import { notFound } from "next/navigation";

const Page = async ({ searchParams }) => {
  const keyword = searchParams?.q;

  if (!keyword) {
    notFound();
  }

  const searchResto = await searchRestaurantByName("/search", `${keyword}`);
  return (
    <>
      <section>
        <Header
          title={`pencarian untuk ${keyword}`}
          linkHref="/restaurant"
          linkTitle="lihat semua"
        />

        <RestaurantList api={searchResto} />
      </section>
    </>
  );
};

export default Page;
