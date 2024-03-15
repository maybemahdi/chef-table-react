import PropTypes from "prop-types";
const Product = ({ product, handleCart }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = product;
  return (
    <div>
      <div
        className="border h-[590px] text-card-foreground bg-white rounded-lg shadow-md overflow-hidden"
        data-v0-t="card"
      >
        <img src={recipe_image} alt="" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">{recipe_name}</h2>
          <p className="text-sm text-gray-600 mt-1">{short_description}</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
            {/* <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li> */}
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-1 text-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gray-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{preparing_time} minutes</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gray-500"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              <span>{calories} calories</span>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-gray-100 p-4">
          <button
            onClick={() => handleCart(product)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#0b9e6d] h-10 px-4 py-2 w-2/5 bg-[#10B981] text-white"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};
export default Product;
