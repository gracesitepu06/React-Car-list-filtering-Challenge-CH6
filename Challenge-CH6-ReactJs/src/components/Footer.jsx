import logo from "../assets/logo.png";
import facebook from "../assets/icon_facebook.svg";
import instagram from "../assets/icon_instagram.svg";
import twitter from "../assets/icon_twitter.svg";
import mail from "../assets/icon_mail.svg";
import twitch from "../assets/icon_twitch.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <p className="fw-light">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000{" "}
            </p>
            <p className="fw-light">binarcarrental@gmail.com </p>
            <p className="fw-light">081-233-334-808</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p className="fw-light">Connect With Us</p>
            <p>
              <img className="mx-1" src={facebook} alt="" />
              <img className="mx-1" src={instagram} alt="" />
              <img className="mx-1" src={twitter} alt="" />
              <img className="mx-1" src={mail} alt="" />
              <img className="mx-1" src={twitch} alt="" />
            </p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Copyright Binar 2022</p>
            <img src={logo} alt="" width="100px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
