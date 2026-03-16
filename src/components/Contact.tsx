import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sohaglikebug@gmail.com" target="_blank" data-cursor="disable">
                sohaglikebug@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+60 183118459</p>
            <h4>Location</h4>
            <p>Lot 9677A, Kawasan Perindustrian, Desa Aman Batu 11, Desa Aman, 47000 Sungai Buloh, Selangor, Malaysia.</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.facebook.com/azharul.islam.sohag.2025"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/azharul_islam_sohag/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/60183118459"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Whatsapp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <img src="/images/tom-meme.png" alt="Tom Meme" className="footer-meme" />
            <h2>
              Designed and Developed <br /> by <span>Azharul Islam Sohag</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
