import Image from "next/image";
import Link from "next/link";
import Featured from '@/components/featured/Fetured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <div>
     <Featured/>
     <CategoryList/>
     <div className="flex gap-2 w-full sm:flex-row flex-col">
      <CardList/>
      <Menu/>
     </div>
    </div>
   

  );
}
