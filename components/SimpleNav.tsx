import { useRouter } from 'next/router';
import React from 'react';
import {MdOutlineArrowBack} from 'react-icons/md';

type Props = {}

export default function SimpleNav({}: Props) {
    const router = useRouter();
  return (
    <div className="p-3 border-b-2">
        <button onClick={() => router.back()} className="bg-gray-300 w-fit rounded-full p-1">
            <MdOutlineArrowBack size={25}/>
        </button>
    </div>
  )
}