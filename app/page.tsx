import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import dayjs from 'dayjs';
import { MdDateRange } from 'react-icons/md';


export default function Home() {
  return (
    <div className="prose dark:prose-invert ">
      {allPosts
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2 className="dark:text-tahiti-dark h-3 table mb-1">
                {post.title}
              </h2>
            </Link>
            <MdDateRange className="float-left mt-0.5 " />
            <p className="text-[13px] m-0">
              {dayjs(post.date).format('MMMM D, YYYY - HH:mm')}
            </p>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
