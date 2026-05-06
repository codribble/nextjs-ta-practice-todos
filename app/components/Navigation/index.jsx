import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link href={`/about`} className="text-2xl">
            서비스 소개
          </Link>
        </li>
        <li>
          <Link href={`/todos`} className="text-2xl">
            할 일 목록
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
