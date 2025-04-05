const HeroSection = () => {
    return (
      <div className="relative bg-sky-50 overflow-hidden">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row">
          {/* Left content */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover and Collect The Best NFTs Digital Art.
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              There are a thousand more NFTs that interest you, find and collect what you like!
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Explore
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Create
              </button>
            </div>
          </div>
  
          {/* Right content - Dragon image will be added as a background */}
          <div className="md:w-1/2 relative">
            {/* This div will be empty as the dragon image will be part of the background */}
          </div>
        </div>
  
        {/* NFT Cards */}
        <div className="container mx-auto px-6 pb-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NFTCard image="/nft1.png" likes="72" bgColor="bg-green-50" />
            <NFTCard image="/nft2.png" likes="124" bgColor="bg-gray-100" />
            <NFTCard image="/nft3.png" likes="53" bgColor="bg-gray-50" likeColor="bg-blue-400" />
          </div>
        </div>
      </div>
    )
  }
  
  const NFTCard = ({ image, likes, bgColor = "bg-green-50", likeColor = "bg-white" }) => {
    return (
      <div className={`${bgColor} rounded-xl overflow-hidden shadow-lg`}>
        <div className="p-4">
          <img src={image || "/placeholder.svg"} alt="NFT" className="w-full h-64 object-cover rounded-lg" />
          <div className="absolute top-6 right-6">
            <div className={`${likeColor} text-gray-800 rounded-full py-1 px-3 flex items-center shadow-md`}>
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              {likes}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroSection
  
  