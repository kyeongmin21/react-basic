import BlogList from "../components/BlogList";

const ListPage = () => {
  return (
    <div className="ListPage container mt-3">
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
      </div>
     <BlogList />
    </div>
  )
}
export default ListPage