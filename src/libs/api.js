const getAllRestaurants = async (resource) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (err) {
    console.log(err);
  }
};

const searchRestaurantByName = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?q=${query}`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (err) {
    console.log(err);
  }
};
export { getAllRestaurants, searchRestaurantByName };
