// 'use client';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Navbar = () => {
//   const router = useRouter();

//   const handleSignOut = () => {
//     // Add your sign-out logic here
//     console.log('User signed out');
//     router.push('/login'); // Redirect to login page
//   };

//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
//       {/* Left Section: Navigation Links */}
//       <div className="flex space-x-4">
//         <Link href="/dashboard" className="hover:text-gray-200">
//           Dashboard
//         </Link>
//         <Link href="/tasklist" className="hover:text-gray-200">
//           Tasklist
//         </Link>
//       </div>

//       {/* Right Section: Sign Out */}
//       <button
//         onClick={handleSignOut}
//         className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
//       >
//         Sign Out
//       </button>
//     </nav>
//   );
// };

// export default Navbar;


'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  // Helper function to check if the link is the current active route
  const isActive = (path) => {
    console.log('Current pathname:', pathname);
    return pathname === path ? 'text-black font-bold text-lg' : 'text-white';
  };

  const handleSignOut = () => {
    // Add your sign-out logic here (clear token, etc.)
    console.log('User signed out');
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav className="bg-blue-600 px-6 py-4 flex justify-between items-center shadow">
      {/* Left Section: Navigation Links */}
      <div className="flex space-x-4">
        <Link href="/dashboard" className={`hover:text-gray-200 ${isActive('/dashboard')}`}>
          Dashboard
        </Link>
        <Link href="/tasklist" className={`hover:text-gray-200 ${isActive('/tasklist')}`}>
          Tasklist
        </Link>
      </div>

      {/* Right Section: Sign Out */}
      <button
        onClick={handleSignOut}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
