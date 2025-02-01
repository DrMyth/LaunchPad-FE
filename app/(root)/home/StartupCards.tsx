"use client"; 

import { useEffect, useState } from "react";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const StartupListClient = ({ initialPosts}: {initialPosts: any}) => {
  const [posts, setPosts] = useState(initialPosts);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");  

  const fetchStartups = async (query: string) => {
    try {
      const response = await axios.post("https://launchpadbe.vercel.app/api/startups", {
        query
      });
      // console.log(query);
      setPosts(response.data.startups);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  useEffect(() => {
      fetchStartups(query as string);
  }, [query]);

  useEffect(() => {
    const ws = new WebSocket("wss://launchpad-ws-production.up.railway.app");

    ws.onopen = () => {
        console.log("WebSocket connection established");
      };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("WebSocket message received:", message);

      if (message.operationType === "insert" || message.operationType === "delete") {
        fetchStartups(query || "");
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: StartupTypeCard) => (
          <StartupCard key={post?._id} post={post} />
        ))
      ) : (
        <p>No startups found.</p>
      )}
    </ul>
  );
};

export default StartupListClient;