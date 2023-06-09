
import {Link} from "react-router-dom";
import BlogList from "../components/BlogList";

const AdminPage = () => {
  return (
    <div className="ListPage container mt-3">
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to={'/blogs/create'} className="btn btn-success">글쓰기</Link>
        </div>
      </div>
     <BlogList isAdmin={true} />
    </div>
  )
}
export default AdminPage