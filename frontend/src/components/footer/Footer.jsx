import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles}>
      © 2025 All rights reserved. Developed by{" "}
      <Link
        to="https://github.com/osamadweikat"
        style={{ marginLeft: "5px", color: "var(--dark-color)" }}
      >
        Osama Dweikat
      </Link>
      .
    </footer>
  );
};

const styles = {
  color: "var(--white-color)",
  fontSize: "21px",
  backgroundColor: "var(--blue-color)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
};

export default Footer;
