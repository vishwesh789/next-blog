import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <Link href="#" className="logo">
                <Image
                  src="/images/logo.svg"
                  width="119"
                  height="37"
                  loading="lazy"
                  alt="Wren logo"
                />
              </Link>

              <p className="footer-text">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                123 Main Street <br />
                New York, NY 10001
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Categories</p>

              <ul>
                <li>
                  <Link href="#" className="footer-link hover-2">
                    Action
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Business
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Adventure
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Canada
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    America
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Curiosity
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Animal
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Dental
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Biology
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Design
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Breakfast
                  </Link>
                </li>

                <li>
                  <Link href="#" className="footer-link hover-2">
                    Dessert
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="footer-text">
                Sign up to be first to receive the latest stories inspiring us,
                case studies, and industry news.
              </p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autoComplete="off"
                />

                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Emaill address"
                  required
                  className="input-field"
                  autoComplete="off"
                />

                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>

              <Link href="#" className="btn btn-primary">
                <span className="span">Subscribe</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </Link>
            </div>
          </div>

          {/* <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by{" "}
              <Link href="#" className="copyright-link">
                vishwesh
              </Link>
            </p>
            <ul className="social-list">
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>

                  <span className="span">Twitter</span>
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>

                  <span className="span">LinkedIn</span>
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>

                  <span className="span">Instagram</span>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
