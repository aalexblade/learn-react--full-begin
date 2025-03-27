import avatar from "./icons/user.png";

function Header(props) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.userName}</p>
    </header>
  );
}

export default Header;
