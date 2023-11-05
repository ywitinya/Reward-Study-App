import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="py-4">
        <div className="flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className='text-2xl font-semibold'>Home</Link>
            </li>
            <li>
              <Link href="/Goals" className='text-2xl font-semibold'>Goals</Link>
            </li>
            <li>
              <Link href="/Rewards" className='text-2xl font-semibold'>Rewards</Link>
            </li>
            <li>
              <Link href="/Community" className='text-2xl font-semibold'>Community</Link>
            </li>
          </ul>
          <button type="submit" className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
