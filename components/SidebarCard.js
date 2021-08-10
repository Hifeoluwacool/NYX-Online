import Link from "next/link";

const SidebarCard = ({ tag }) => {
  return (
    <div className="sidebarcard my-2 mr-2 ">
      <Link href="/reactjs">
        <a className="underline bg-blue-300 py-1 text-white p-2">{tag}</a>
      </Link>
    </div>
  );
};

export default SidebarCard;
