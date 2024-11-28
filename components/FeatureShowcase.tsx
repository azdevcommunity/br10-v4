import Image from 'next/image'

const features = [
  {
    title: 'Save',
    description: 'BR10 offers an unparalleled experience with its ease of use, innovative features, and seamless integration capabilities.',
    image: '/placeholder.svg?height=300&width=400',
    buttonText: 'Save',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Share',
    description: 'BR10 is where your bookings become social. Share your favorite services with friends, family, or colleagues.',
    image: '/placeholder.svg?height=300&width=400',
    buttonText: 'Share',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Discover',
    description: 'Expand your horizons with BR10. Discover new services, see public bookings, and find inspiration for your next appointment.',
    image: '/placeholder.svg?height=300&width=400',
    buttonText: 'Post',
    bgColor: 'bg-pink-100',
  },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const FeatureCard = ({ feature, index }) => (
  <div className={`relative overflow-hidden rounded-3xl ${feature.bgColor} p-8 ${index % 2 === 0 ? 'md:col-span-2' : 'md:col-span-3'}`}>
    <div className="relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
        <p className="text-lg mb-6">{feature.description}</p>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
          {feature.buttonText}
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={feature.image}
            alt={feature.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-600 opacity-20 rounded-lg"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            {feature.buttonText}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-600 rounded-full opacity-10"></div>
    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-600 rounded-full opacity-10"></div>
  </div>
)

export default function FeatureShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Discover BR10 Features</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

