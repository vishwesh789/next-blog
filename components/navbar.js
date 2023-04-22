import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Navbar = (props) => {
  const navbar = useRef();

  const navTogglers = useRef(null);

  const header = useRef();

  const backTopBtn = useRef();

  const toggleNav = () => {
    console.log("navtogglersss", navTogglers.current);
    navbar.current.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      header.current.classList.add("active");
      backTopBtn.current.classList.add("active");
    } else {
      header.current.classList.remove("active");
      backTopBtn.current.classList.remove("active");
    }
  };

  const categories = props.data.categories;
  return (
    <div>
      <header className="header" data-header id="top" ref={header}>
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/FOREX-logo.png"
              width="119"
              height="37"
              alt="Wren logo"
            />
          </Link>

          <nav className="navbar" data-navbar ref={navbar}>
            <div className="navbar-top">
              <Link href="/" className="logo">
              <Image
              src="/images/FOREX-logo.png"
              width="119"
              height="37"
              alt="Wren logo"
            />
              </Link>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                ref={navTogglers}
                onClick={toggleNav}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              {categories?.map((item, idx) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={`/category/${item.attributes.slug}`}
                      className="navbar-link hover-1"
                      data-nav-toggler
                      ref={navTogglers}
                      onClick={toggleNav}
                    >
                      {item.attributes.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* <div className="navbar-bottom">
            <div className="profile-card">
              <Image
                src="/images/author-1.png"
                width="48"
                height="48"
                alt="Steven"
                className="profile-banner"
              />

              <div>
                <p className="card-title">Hello Vishwesh !</p>

                <p className="card-subtitle">You have 3 new messages</p>
              </div>
            </div>

            <ul className="link-list">
              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  Profile
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  Articles Saved
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  Add New Post
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  My Likes
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  Account Setting
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar-bottom-link hover-1">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div> */}

            <p className="copyright-text">
              Copyright 2022 © Ace health wealth -Developed by Vishwesh Singh
            </p>
          </nav>

          <Link href="#" className="btn btn-primary">
            Subscribe
          </Link>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
            ref={navTogglers}
            onClick={toggleNav}
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </header>
      <Link
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
        ref={backTopBtn}
      >
        <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
      </Link>
    </div>
  );
};

export default Navbar;
