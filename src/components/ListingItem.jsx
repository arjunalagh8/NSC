import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaCalendar, FaCalendarDay } from 'react-icons/fa';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]' id='Events'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className=' truncate text-lg font-semibold text-slate-700 self-center'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <FaCalendarDay className='h-4 w-4 text-green-700' />
            <p className=' text-sm text-gray-600 truncate w-full '>
              {listing.address}
            </p>
          </div>
          <center>
          <div className='font-semibold'>Click for more details</div>
          </center>
          {/* <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p> */}

        </div>
      </Link>
    </div>
  );
}
