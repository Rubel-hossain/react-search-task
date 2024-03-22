import useGlobalContext from "../hooks/useGlobalContext";
export default function Stories() {
  const { hits, loading, removePost } = useGlobalContext();
  return loading ? (
    <div>
      <h2>Loading......</h2>
    </div>
  ) : (
    <div className="stories-div">
      {hits.map((posts) => (
        <div className="card" key={posts.story_id}>
          <h2>{posts.title}</h2>
          <p>
            Author <span>{posts.author}</span> |{" "}
            <span>{posts.num_comments}</span> Comments
          </p>
          <div className="card-button">
            <a href={posts.url} target="_blank">
              Read More
            </a>
            <button onClick={() => removePost(posts.objectID)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
