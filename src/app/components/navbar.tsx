import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <Link href="/"> Home Page</Link>
            <Link href="/about"> About Page</Link>
            <Link href="/result"> Result Page</Link>
            <Link href="/api/hello"> API Page </Link>
        </div>
    )
  }
  