
const OrderRow = ({bottleSize, counter, onDecrease, onIncrease, onAdd}) => {
  return (
    <div className='flex flex-row justify-between items-center mt-4'>
      <div className='bg-white w-fit text-2xl hover:bg-gray-100 text-gray-800 font-semibold px-3 border border-gray-400 rounded-full shadow' >
        <button
          className='mr-2 text-2xl' 
          onClick={onDecrease}>-</button>
        {counter} 
        <button 
          className='ml-1 text-2xl'
          onClick={onIncrease}>+</button>
      </div>
      <p>{bottleSize}</p>
      <button
        onClick={onAdd} 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded-full shadow">Add to Cart</button>
    </div>
  )
}

const CocktailProductCard = ({cocktailImage, name, ingredients, description, rows=[]}) => {
  return (
    <div className='w-sm text-left'>
      <img src={cocktailImage}/>
      <p className='text-3xl font-semibold mb-2 text-gold'>{name}</p>
      <p>{ingredients}</p>
      <p className='italic mt-2 mb-2'>{description}</p>
      {rows.map((row, idx) =>
      <OrderRow key={idx} {...row} />
      )}
      
    </div>
  )
}

export default CocktailProductCard