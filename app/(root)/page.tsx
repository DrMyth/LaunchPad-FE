import StartupCard, { StartupTypeCard } from "../components/StartupCard";
import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const posts = [{id: 1, title: "Startup 1", slug: "startup-1", views: 100, date: new Date(), description: "Description 1", category: "Category 1", image: "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D", pitch: "Pitch 1", authorId: 1, author: {id: 1, name: "Author 1"}}];
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          PITCH YOUR STARTUP, <br /> CONNECT WITH ENTREPRENEURS
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?.id} post={post} />
          ))
        ) : (
          <p>No startups found.</p>
        )}
      </ul>
      </section>
    </>
  );
}
