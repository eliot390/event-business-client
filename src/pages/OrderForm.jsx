import pecan from '../assets/images/pecan.png'

const OrderForm = () => {

  return (
    <div>      
      <div className='mx-auto mb-8 w-xl bg-sage p-4 rounded-sm'>
        <img src={pecan} className='rounded-sm'/>
        <form>        
          <div>
            <h2 className="text-gray-900 text-center text-3xl mt-4">Holiday Order Form</h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Name</span>
                </label>
                <div className="mt-2">
                  <input 
                    id="first-name"
                    type="text" 
                    name="first-name"
                    placeholder="First"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label for="first-name" className="block text-sm/6 font-medium text-transparent">f</label>
                <div className="mt-2">
                  <input 
                    id="last-name" 
                    type="text" 
                    name="last-name"
                    placeholder="Last"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email" 
                    type="email" 
                    name="email" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Phone</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email" 
                    type="email" 
                    name="email" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Date Requested</span>
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="guests" name="guests" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6">
                    <option>Saturday, Nov. 1st</option>
                    <option>Sunday, &nbsp; Nov. 2nd</option>
                    <option>Saturday, Nov. 8th</option>
                    <option>Sunday, &nbsp; Nov. 9th</option>
                    <option>Saturday, Nov. 15th</option>
                    <option>Sunday, &nbsp; Nov. 16th</option>
                    <option>Saturday, Nov. 22nd</option>
                    <option>Sunday, &nbsp; Nov. 23rd</option>
                    <option>Saturday, Nov. 29th</option>
                    <option>Sunday, &nbsp; Nov. 30th</option>
                    <option>Saturday, Dec. 6th</option>
                    <option>Sunday, &nbsp; Dec. 7th</option>
                    <option>Saturday, Dec. 13th</option>
                    <option>Sunday, &nbsp; Dec. 14th</option>
                    <option>Saturday, Dec. 20th</option>
                    <option>Sunday, &nbsp; Dec. 21st</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="col-span-full">
                <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Additional Details</label>
                <div className="mt-2">
                  <textarea 
                    id="additional-info" 
                    type="text" 
                    name="additional-info" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-dark-sage sm:text-sm/6" />
                </div>
              </div>
              
            </div>
          </div>        
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-darker-sage px-3 py-2 text-sm font-semibold text-white hover:bg-dark-sage">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderForm