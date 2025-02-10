import axios from 'axios';

const backEndLink = 'https://cookscape-domain.up.railway.app';

export const getIngredients = async () => {
  try {
    const response = await axios.get(`${backEndLink}/ingredients/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
};

export const restockIngredientStock = async (ingredientsId, quantity) => {
  try {
    await axios.post(`${backEndLink}/ingredients/add-quantity`, {
      ingredient_id: ingredientsId,
      added_quantity: quantity,
    });
  } catch (error) {
    console.error('Error restocking ingredient:', error);
  }
};

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${backEndLink}/recipe/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getDishes = async () => {
  try {
    const response = await axios.get(`${backEndLink}/dishes/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    return [];
  }
};


export const getOrders = async () => {
  try {
    const response = await axios.get(`${backEndLink}/orders/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};
