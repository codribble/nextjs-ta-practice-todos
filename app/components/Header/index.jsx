import Link from "next/link";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="py-5">
      <div className="flex items-center justify-between px-5">
        <Link href={`/`} className="text-2xl">
          메인
        </Link>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
