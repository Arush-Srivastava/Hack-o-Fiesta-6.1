import { FiSearch } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="bg-sky-50 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <img src="/logo.png" alt="JOYS SPACE" className="h-10" />
          <span className="font-bold text-xl ml-2">JOYS SPACE</span>
        </div>

        <div className="relative w-80">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search items, collections, and accounts"
            className="w-full py-2 pl-10 pr-4 bg-white border border-gray-200 rounded-md focus:outline-none"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Explore
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Activity
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Community
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Pages
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center">
        <span className="mr-2">💼</span>
        Connect wallet
      </button>
    </nav>
  )
}

export default Navbar

