import { FaXmark, FaTrash } from "react-icons/fa6";

const MyCart = ({ onClose, cart, increment, decrement, removeItem, clearCart, checkOut, isCheckOut = false }) => {
  const buttonStyles = 'text-lg bg-white shadow-md px-2 rounded';
  
  return (
    <div className="relative h-auto p-5">
      <button
        onClick={onClose}
        className="absolute top-9 right-8 text-4xl text-violet-900 hover:text-violet-500 focus:outline-none">
        <FaXmark />
      </button>
      {isCheckOut 
      ? <div className="text-2xl text-violet-800 font-bold mt-10 mb-4">Checkout Message</div>
      : 
      <>
        <h2 className="text-2xl text-violet-800 font-bold mt-10 mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {cart.map((item) => (
              <li key={item.id}
                className="group flex gap-4 items-center shadow-sm shadow-violet-400 rounded p-2 h-40 hover:bg-violet-200 transition-all duration-300 overflow-hidden"
              >
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-14">
                    <img src={item.img} alt={item.name} className="w-1/4 ml-4 group-hover:scale-110 transition-all duration-300" />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-md font-bold italic text-violet-800">{item.name}</h3>
                      <p className="text-md text-violet-800">${item.price}</p>
                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <button onClick={() => decrement(item.id)} className={buttonStyles}>-</button>
                          <p className=" font-bold text-violet-800">{item.quantity}</p>
                          <button onClick={() => increment(item.id)} className={buttonStyles}>+</button>
                        </div>
                        <p className="text-sm p-2 bg-violet-800 text-white rounded font-bold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-700 p-2" onClick={() => removeItem(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && 
        <>
          <div>
            <h3 className="text-lg font-bold text-violet-800 mt-10">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          </div>
          <div className="w-full flex justify-between gap-2 my-10">
            <button onClick={() => clearCart()} className="w-full px-4 py-3 bg-red-800 text-white font-bold text-lg">Clear Cart</button>
            <button onClick={() => checkOut()} className="w-full px-4 py-3 bg-yellow-400 font-bold text-lg">Checkout</button>
          </div>
        </>
        }
      </>
      }
    </div>
  );
};

export default MyCart;