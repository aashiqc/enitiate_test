

import Backtopost from '@/app/components/Backtopost';
import Button from '@/app/components/Button';
import Container from '@/app/components/Container';
import HomeLayout from '@/app/components/layouts/HomeLayout';
import getPost from '@/app/libs/getPost'


export default async function PostPage({ params: {id}}) {
  const postData = await getPost(id);


  return (
    <HomeLayout>
    <div className='flex flex-col text-center justify-center items-center px-10 md:px-16 lg:px-24 gap-6 w-full h-[100vh] text-white '>
      <p className='text-md text-center text-white font-bold'>Post No : {postData.id}</p>
      <h1 className='text-4xl text-center text-white font-bold'>{postData.title}</h1>
      <p className='font-medium text-medium text-center'>{postData.body}</p>
      <div className='w-[25%]'>

      <Backtopost/>
      </div>
     
    </div>
    </HomeLayout>
  )
}