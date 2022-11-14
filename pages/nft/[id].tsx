import Image from "next/image";
import qwerty from "../../asset/qwerty.jpeg"

 const NFTDropPage = () => {
    return(
    <div className="flex h-screen flex-col">
        {/* Left */}
        <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
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
        <div>
            <div>

            </div>
        </div>

    </div>
    );
}

export default NFTDropPage;