import Image from "next/image";

interface CardProps {
    title: string;
    image: string;
    price: number;
}

const Card = ({ title, image, price }: CardProps) => {
    return (
        <article
            className="group p-8 hover:bg-[#8AB4FD] border-2 border-[#f0f4f9] 
                hover:border-transparent rounded-3xl transition duration-500 ease-in-out"
        >
            <div className="w-11/12 my-0 mx-auto">
                <Image
                    src={image}
                    alt={title}
                    width={192}
                    height={192}
                    className="rounded-lg aspect-square object-cover my-0 
                        mx-auto w-48 h-48"
                />
                <h2
                    className="font-medium text-2xl text-center 
                        text-[#686675] group-hover:text-white max-w-[256px] 
                        mt-8 transition duration-500 ease-in-out"
                >
                    {title}
                </h2>
            </div>
            <div className="flex justify-between items-center mt-8">
                <p
                    className="font-semibold text-xl text-[#312F47] group-hover:text-white 
                        transition duration-500 ease-in-out"
                >
                    $ {price}
                </p>
                <button
                    className="font-semibold text-white group-hover:text-[#8AB4FD] w-8 h-8 p-1 rounded-md 
                        bg-[#8AB4FD] group-hover:bg-white transition duration-500 ease-in-out"
                >
                    +
                </button>
            </div>
        </article>
    );
}

export default Card;