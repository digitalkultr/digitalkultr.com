import post_image from "../../../assets/img/insights-image/post-placeholder-img-1.jpg";
import post_image2 from "../../../assets/img/insights-image/post-placeholder-img-2.jpg";

const InsightsList = () => {
  return (
    <section className="insights-list-container container">
      <div className="instights-list-content">
        <ul className="tag-lists">
          <li className="tags">All</li>

          <li className="tags">Tag 1</li>

          <li className="tags">Tag 2</li>
        </ul>

        <div className="posts-list">
          {postList.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.img} width="100%" height="100%" alt="post" />

              <div className="post-texts">
                <div className="top">
                  <h1 className="post-title">{post.title}</h1>
                  <p className="tag">{post.tag}</p>
                </div>
                <div className="bottom">
                  <p className="post-summary">{post.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsList;

const postList = [
  {
    img: post_image,
    title: "Post title",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laudantium.",
    tag: "Tag",
    id: 1,
  },

  {
    img: post_image2,
    title: "Post title",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laudantium.",
    tag: "Tag",
    id: 2,
  },

  {
    img: post_image2,
    title: "Post title",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laudantium.",
    tag: "Tag",
    id: 3,
  },
];
