"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBars  } from '@fortawesome/free-solid-svg-icons';

export function MobileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-2xl" icon={faXmark} />
        </button>
        <ul className="flex w-screen h-screen flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385886219166">Do Now</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385457731159">Bug Report</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385529753163">End of Day</Link>
          </li>
          
  
            
          {/* Add other navigation links */}
        </ul>
      </div>
    );
  }



export function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-2 top-2 p-2" onClick={onClick}>
      <FontAwesomeIcon className="text-2xl" icon={faBars} />
    </button>
  );
}