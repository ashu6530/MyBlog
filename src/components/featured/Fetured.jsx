import Image from "next/image";

export default function Featured(){
    return(
        <div className="mt-2 p-4">
      <h1 className="text-4xl font-bold mb-4 leading-loose tracking-widest">
        Welcome! I'm Ashutosh Singh<br/>
        Dive into My Stories and Creative Ideas
      </h1>
      <div className="flex flex-col md:flex-row w-full mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <Image 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
            alt="Blog header image"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold">Discover, Inspire, and Engage</h1>
          <p className="font-light leading-loose mt-8">
            Welcome to Blogg, your ultimate destination for insightful articles, inspiring stories, and in-depth tutorials on a variety of topics. Whether you're a tech enthusiast, a lifestyle guru, or someone looking to share your unique experiences, Blogg provides the perfect platform to express your thoughts and connect with like-minded individuals.
          </p>
          <button className="px-4 mt-8 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-700 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
    )
}