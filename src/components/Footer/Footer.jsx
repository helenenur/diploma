import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Footer.css";

function Footer() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/category/${category.path}`}>
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          {/* <h4 className="footer-heading">Categories</h4> */}
          {/* <ul className="footer-list">{output}</ul> */}
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Menu</h4>
          <ul className="footer-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/delivery">Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <p>Bags shop</p>
          <p>City, Bishkek</p>
          <div className="directions-to-administrator">
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+996995005227"
            >
              996995005227
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading"> Social media</h4>
          <div className="network-icons">
            <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="green"
              >
                {/* <path
                  d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938


10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
                ></path> */}
              </svg>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="red"
              >
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
            </a>
            <a href="https://vk.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
                fill="blue"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 13.816406 17.125 C 13.117406 17.125 13 17.467984 13 17.833984 C 13 18.494984 13.550734 22.067781 16.552734 26.175781 C 18.729734 29.154781 21.597719 30.873047 24.136719 30.873047 C 25.674719 30.873047 25.832031 30.483094 25.832031 29.871094 L 25.832031 27.146484 C 25.833031 26.412484 26.001234 26.291016 26.490234 26.291016 C 26.839234 26.291016 27.550781 26.519047 28.925781 28.123047 C 30.511781 29.973047 30.799984 30.873047 31.708984 30.873047 L 34.109375 30.873047 C 34.666375 30.873047 34.985047 30.6405 34.998047 30.1875 C 35.001047 30.0725 34.984266 29.942828 34.947266 29.798828 C 34.769266 29.270828 33.9545 27.978047 32.9375 26.748047 C 32.3735 26.067047 31.816547 25.393344 31.560547 25.027344 C 31.389547 24.788344 31.324031 24.618031 31.332031 24.457031 C 31.340031 24.287031 31.428547 24.127344 31.560547 23.902344 C 31.537547 23.902344 34.638406 19.546125 34.941406 18.078125 C 34.983406 17.940125 35.003047 17.811266 34.998047 17.697266 C 34.984047 17.365266 34.757703 17.125 34.220703 17.125 L 31.820312 17.125 C 31.214312 17.125 30.935484 17.492375 30.771484 17.859375 C 30.771484 17.859375 29.274781 20.93875 27.550781 22.96875 C 26.991781 23.55675 26.707297 23.541016 26.404297 23.541016 C 26.242297 23.541016 25.832031 23.344641 25.832031 22.806641 L 25.832031 18.054688 C 25.832031 17.418688 25.674109 17.125 25.162109 17.125 L 20.900391 17.125 C 20.527391 17.125 20.333984 17.417891 20.333984 17.712891 C 20.333984 18.323891 21.157953 18.470594 21.251953 20.183594 L 21.251953 23.505859 C 21.251953 24.312859 21.111594 24.457031 20.808594 24.457031 C 19.992594 24.457031 18.385547 21.707516 17.310547 18.103516 C 17.077547 17.394516 16.844281 17.125 16.238281 17.125 L 13.816406 17.125 z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                fill="blue"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 30 39 L 30 29 L 33.625 29 C 34.129 29 34.555187 28.623047 34.617188 28.123047 L 34.992188 25.123047 C 35.028188 24.839047 34.938047 24.553891 34.748047 24.337891 C 34.559047 24.122891 34.287 24 34 24 L 30 24 L 30 20.5 C 30 19.397 30.897 18.5 32 18.5 L 34 18.5 C 34.552 18.5 35 18.053 35 17.5 L 35 14.125 C 35 13.607 34.604844 13.174906 34.089844 13.128906 C 34.030844 13.123906 32.619984 13 30.833984 13 C 26.426984 13 24 15.616187 24 20.367188 L 24 24 L 20 24 C 19.448 24 19 24.447 19 25 L 19 28 C 19 28.553 19.448 29 20 29 L 24 29 L 24 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
