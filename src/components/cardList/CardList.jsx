import Pagination from '@/components/pagination/Pagination'
import Card from '@/components/card/Card'
export default function cardList(){
    return(
        <div className="mt-2 sm:w-8/12 w-full p-4">
            <h1 className="text-3xl mt-4 p-2">Recent Posts</h1>
            <div className='mb-8'>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
        <Pagination/>
        </div>
    )
}