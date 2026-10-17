import LikeButton from "./components/LikeButton";

// This is a Server Component (the default in the App Router).
// It can be async and fetch data on the server. It ships NO JavaScript
// for itself; the browser receives finished HTML.
async function getRecipes() {
  // Pretend this is a database or API call that runs on the server.
  return [
    { id: 1, title: "Creamy Tomato Pasta", price: "$9", likes: 24, emoji: "🍝" },
    { id: 2, title: "Margherita Pizza", price: "$11", likes: 51, emoji: "🍕" },
    { id: 3, title: "Garden Salad", price: "$7", likes: 12, emoji: "🥗" },
    { id: 4, title: "Berry Pancakes", price: "$8", likes: 33, emoji: "🥞" },
  ];
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="wrap">
      <h1>NextBites menu</h1>
      <p className="sub">
        This list is rendered by a <b>Server Component</b>
        <span className="badge server">server</span> and each Like button is a{" "}
        <b>Client Component</b>
        <span className="badge client">client</span>.
      </p>
      <div className="grid">
        {recipes.map((r) => (
          <article className="card" key={r.id}>
            <div className="photo">{r.emoji}</div>
            <h3>{r.title}</h3>
            <p className="price">{r.price}</p>
            {/* A Server Component can render a Client Component and pass it
                serializable props (here, the initial like count). */}
            <LikeButton initialLikes={r.likes} />
          </article>
        ))}
      </div>
    </main>
  );
}
