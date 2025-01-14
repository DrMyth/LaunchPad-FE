import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import SearchForm from "../../components/SearchForm";
import axios from "axios";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function getStartups(query: string) {
  const response = await axios.post("https://launchpad-be-z59x.onrender.com/api/startups", {
      query
  });
  return response.data.startups;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await getStartups(query || "");
  // console.log(posts);
  const session = await auth();
  if(!session){
    redirect("/");
  }
  // console.log(session);

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
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p>No startups found.</p>
        )}
      </ul>
      </section>
    </>
  );
}
