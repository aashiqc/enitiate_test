
import getPosts from "@/app/libs/getPosts";
import Link from "next/link";
import HomeLayout from "../components/layouts/HomeLayout";



export default async function Posts() {


  const post = await getPosts();

  return (
    <section>


    <HomeLayout>
      <h1 className="font-bold text-4xl  pt-24 text-center text-white">
        All Posts
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {post.map((post) => (
          <div
            key={post.id}
            className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
          >
            <Link href={`/posts/${post.id}`}>
              <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                {post.title}
              </div>
              <div className="col-span-2 rounded-md">{post.body}</div>
              <div className="col-span-1"></div>
            </Link>
          </div>
        ))}
      </div>
    </HomeLayout>

    </section>
  );
}
