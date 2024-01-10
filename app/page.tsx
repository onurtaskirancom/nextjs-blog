import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';
import dayjs from 'dayjs';
import { MdDateRange } from 'react-icons/md';

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-full">
      {allPosts
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((post) => (
          <article key={post._id}>
            <div className=" bg-gradient-to-br from-green-50 to-cyan-100">
              <div className="container m-auto ">
                <div className="">
                  <div className="min-w-full rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-sm hover:rounded-2xl ">
                    <Link href={post.slug}>
                      <img
                        className="min-w-full  object-fill  object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl  "
                        src={post.bannerImage || 'images/default.jpeg'}
                        alt="onurtaskiran"
                      />
                    </Link>
                    <div className=" max-w-sm ">
                      <div className="space-y-2">
                        <Link href={post.slug}>
                          <h2 className="dark:text-tahiti-dark mt-7 mb-0.5 text-2xl font-semibold text-cyan-900 ">
                            {post.title}
                          </h2>
                        </Link>
                        <MdDateRange className="float-left mt-0.5 " />
                        <p className="text-[13px] ">
                          {dayjs(post.date).format('MMMM D, YYYY - HH:mm')}
                        </p>
                        {post.description && (
                          <p className="text-gray-600 not-prose ">
                            {post.description}
                          </p>
                        )}

                        <Link
                          className=" block w-max text-cyan-600 dark:text-tahiti-title"
                          href={post.slug}
                        >
                          Read more
                        </Link>
                        
                        
                       
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="max-w-xl ">
              <Link href={post.slug}>
                <h2 className="dark:text-tahiti-dark h-3 table mb-1">
                  {post.title}
                </h2>
              </Link>
              <MdDateRange className="float-left  mt-0.5 " />
              <p className="text-[13px] m-0">
                {dayjs(post.date).format('MMMM D, YYYY - HH:mm')}
              </p>
              {post.description && <p className="">{post.description}</p>}
              <div className="float-right space-x-6 ">
                <Link href={post.slug}>
                  <img
                    className="rounded-xl  "
                    src={post.bannerImage || 'images/default.jpeg'}
                    alt="onurtaskiran"
                  />
                </Link>
              </div>
            </div> */}
          </article>
        ))}
    </div>
  );
}
