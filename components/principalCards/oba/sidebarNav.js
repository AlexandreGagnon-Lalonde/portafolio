import Link from "next/link";

export default function SideBarNav() {
  return (
    <div>
      <Link href={"#info"} scroll={false}>
        generl info
      </Link>
      <Link href={"#problem"} scroll={false}>
        problems
      </Link>
      <Link href={"#lesson"} scroll={false}>
        lessons
      </Link>
    </div>
  );
}
