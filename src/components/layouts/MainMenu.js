import Link from "next/link";

export default function MainMenu() {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link active font-siliguri">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/setting-cookies" className="nav-link font-siliguri">
              Setting Cookies
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/reading-cookies" className="nav-link font-siliguri">
              Reading Cookies
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/api/redirection" className="nav-link font-siliguri">
              Redirection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
