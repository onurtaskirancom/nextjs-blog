import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';
import dayjs from 'dayjs';
import { MdDateRange } from 'react-icons/md';

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-4xl ">
      {allPosts
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((post) => (
          <article className="max-w-4xl" key={post._id}>
            <div className=" bg-gradient-to-br from-green-50 to-cyan-100">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="">
                  <div className=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-sm hover:rounded-2xl ">
                    <Link href={post.slug}>
                      <img
                        className="h-11/12 w-11/12 object-fill  object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl  "
                        src={post.bannerImage || 'images/default.jpeg'}
                        alt="onurtaskiran"
                      />
                    </Link>
                    <div className="sm:w-7/12   ">
                      <div className="space-y-2">
                        <div className="">
                          <Link href={post.slug}>
                            <h2 className="dark:text-tahiti-dark mt-7 text-2xl font-semibold text-cyan-900 ">
                              {post.title}
                            </h2>
                          </Link>
                          <MdDateRange className="float-left mt-0.5 " />
                          <p className="text-[13px] m-0 ">
                            {dayjs(post.date).format('MMMM D, YYYY - HH:mm')}
                          </p>
                          {post.description && (
                            <p className="text-gray-600 not-prose ">
                              {post.description}
                            </p>
                          )}
                        </div>

                        <Link
                          className="block w-max text-cyan-600 dark:text-tahiti-title"
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

            {/* <Link href={post.slug}>
                <h2 className="dark:text-tahiti-dark h-3 table mb-2 ">
                {post.title}
              </h2>
            </Link>
            <MdDateRange className="float-left mt-0.5 " />
            <p className="text-[13px] m-0">
              {dayjs(post.date).format('MMMM D, YYYY - HH:mm')}
            </p>

            <div className=" float-left   ">
              <div className="w-60   float-left mr-6 ">
                <Link href={post.slug}>
                  <img
                    className=" rounded-xl "
                    src={post.bannerImage || 'images/default.jpeg'}
                  />
                </Link>
              </div>
              <div className=" ">
                {post.description && <p>{post.description}</p>}
                <a
                  className="p-2 mx-5 dark:bg-tahiti-menu rounded-md bg-tahiti-dark rounded-md "
                  href=""
                >
                  Read More
                </a>
              </div>
            </div> */}
          </article>
        ))}
    </div>
  );
}
