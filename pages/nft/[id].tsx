import Image from "next/image";
import qwerty from "../../asset/qwerty.jpeg";
import qwertycollection from "../../asset/qwerty-collection.jpeg";

 const NFTDropPage = () => {
    return(
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 ">
        {/* Left */}
        <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
                <Image src={qwerty} alt=""
                className="w-44 rounded-xl object-cover 
                lg:h-96 lg:w-96" />
                </div>
                <div className="text-center p-5 space-y-2">
                    <h1 className="text-4xl text-white font-bold"> Qwerty Collection </h1>
                    <h2 className="text-xl text-gray-300">A Collection of a puppy named Qwerty who has an excellent web developer that works for her.</h2>
                </div>
            </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
            {/* Header */}
            <header className="flex items-center justify-between">
                <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
                    <span className="font-extrabold "> QWERTY </span> {" "}
                    NFT Market Place
                    </h1>

                <button className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base ">Sign In</button>
            </header>
            <hr className="my-2 border" />
            {/* Content */}
            <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center
            
            ">
                <Image
                className="object-contain w-80 pb-10 lg:h-60" src={qwertycollection} alt="" />
                <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">Young Qwerty | NFT Drop</h1>

                <p className="pt-2 text-xl text-green-500"> 3 / 12 NFT's Claimed</p>

            </div>
            {/* Mint Button */}
            <button className="h-16 bg-red-600 text-white rounded-full font-bold">Mint NFT (0.01 ETH)</button>
        </div>

    </div>
    );
}

export default NFTDropPage;