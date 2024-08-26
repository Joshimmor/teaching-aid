"use client"
import Link from 'next/link';
export function DesktopNavLinks() {
  return (
    <ul className="flex flex-row space-x-6 ">
     <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385886219166">Do Now</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385457731159">Bug Report</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link href="https://form.jotform.com/242385529753163">End of Day</Link>
          </li>
      {/* Add other navigation links */}
    </ul>
  );
}