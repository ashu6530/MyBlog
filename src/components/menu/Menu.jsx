import MenuPost from "@/components/menuPost/MenuPost";
import MenuCategories from "@/components/menuCategories/MenuCategories";


export default function Menu() {
  return (
    <div className="sm:w-4/12 w-full  mt-2 p-6">
      <h2 className="text-gray-500">What's hot</h2>
      <h1 className="text-2xl font-semibold">Most Popular</h1>
      <MenuPost withImage={false} />

      <h2 className="text-gray-500 mt-8">Discover by topic</h2>
      <h1 className="text-2xl font-semibold mt-2">Categories</h1>
       <MenuCategories/>

      <h2 className="text-gray-500 mt-8">Chosen by editors </h2>
      <h1 className="text-2xl font-semibold">Editors Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
}
