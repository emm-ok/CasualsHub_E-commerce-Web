import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ id, name, price, img, desc, handleAddToCart, totalItems }) => {
  const isDescAvailable  = desc;

  return (
    <div key={id} className='relative h-96 product group flex flex-col justify-between p-6 border-2 border-transparent hover:border-violet-800 rounded-lg transition duration-300 overflow-hidden bg-white'>
      <span className='absolute top-2 right-2 p-4 bg-violet-300 rounded'>{() => totalItems(id)}</span>
      <img src={img} alt={name} className='h-2/3 object-contain scale-75 group-hover:scale-95 transition duration-300' />
      <div className='flex justify-between relative' >
        <div className='name-price text-violet-800 md:w-3/4'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-xl  '>${price}</p>
            {isDescAvailable ? <p className='md:text-sm'>{desc}</p> : <h1>________</h1>}
        </div>
        <button key={id} onClick={() => handleAddToCart(id)} className='absolute bottom-2 right-2 flex items-center gap-2 text-xl p-4 rounded-md transition-all border-violet-600 bg-violet-700 hover:bg-gradient-to-t hover:from-violet-600 hover:to-pink-500 text-white'>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  )
}

export default ProductCard