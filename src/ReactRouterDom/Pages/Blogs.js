import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Blogs() {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    console.log(params.numId);
  }, [params.numId]);
  return (
    <>
      <div>
        <Link to="/blogs/1">1st</Link>
        <Link to="/blogs/2">2nd</Link>
        <Link to="/blogs/3">3rd</Link>
      </div>
    </>
  );
}

export default Blogs;
