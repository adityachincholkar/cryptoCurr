import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>HOME</h1>
      <Link to="/about">about</Link>
      <Link to="/contact">contacts</Link>
      <Link to="blogs/:numId">Blogs</Link>
      <Link to="chat.openai.com/">gpt</Link>
      <Link to="/swparent">SW</Link>
    </>
  );
}

export default Home;
