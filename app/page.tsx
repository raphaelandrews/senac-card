import Card from "@/components/card";

const cardItems = [
  {
    title: 'Stewed cabbage with sauce',
    image: '/cabbage.jpg',
    price: 5.90,
  },
  {
    title: 'Puree soup wih turkey pieces',
    image: '/puree.jpg',
    price: 7.55,
  },
  {
    title: 'Chicken with vegetables',
    image: '/chicken.jpg',
    price: 3.39,
  },
]

export default function Home() {
  return (
    <main
      className="flex w-screen justify-center items-center max-full h-screen 
        max-h-full">
      <div
        className="w-11/12 my-0 mx-auto flex flex-wrap 
        justify-center items-center gap-8"
      >
        {cardItems.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </main>
  )
}
