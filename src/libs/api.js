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

const addReview = async ({ id, name, review }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, review }),
      }
    );

    const responseJson = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: responseJson.message || "Failed to add review",
      };
    }

    return { error: false, message: "Review successfully created" };
  } catch (error) {
    return { error: true, message: "Network error or server not reachable" };
  }
};

export { getAllRestaurants, searchRestaurantByName, addReview };
