import Link from "next/link";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "7gnjvnxxtd47",
    accessToken: "OgOY8SWvI0PrBtCWYquQ123DehJCO1S6XcHedTPMtrY",
  });
  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      data: res.items,
    },
  };
}

// export async function getStaticProps() {
//   const client = createClient({
//     space: "7gnjvnxxtd47",
//     accessToken: "OgOY8SWvI0PrBtCWYquQ123DehJCO1S6XcHedTPMtrY",
//   });

//   const res = await client.getEntries({ content_type: "recipe" });

//   return {
//     props: {
//       reviews: res.items,
//     },
//   };
// }
const PostCard = () => {
  return (
    <div className="post flex border-[#ccc] py-4 ">
      <div className="count_box px-4 xl:px-10 flex justify-center items-center ">
        <h5 className="count font-bold text-blue-400">5</h5>
      </div>
      <div className="post_view">
        <Link href="/post/[id]">
          <a>
            <h3 className="post_title overflow-hidden font-bold overflow-ellipsis hover:text-yellow-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>
        </Link>
        <div>
          <span className="comment_count pr-1 underline text-xs">
            2 comment
          </span>
          <span className="seperator text-2xl px-1">.</span>
          <span className="published_time px-1 underline text-xs">
            2 hours ago
          </span>
          <span className="author px-1  text-xs">
            from <span className="underline">syntactic teams</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
