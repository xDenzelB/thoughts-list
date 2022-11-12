import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Post() {
  return (
    <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
      <form>
        <h1 className='text-2x1 font-bold'>Whats on Your Mind?</h1>
        <div className='py-2'>
          <h3 className='text-lg font-medium py-2'>Description</h3>
          <textarea className='bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm'></textarea>
          <p>0/280</p>
        </div>
        <button className='w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm'>Submit</button>
      </form>
    </div>
  );
}