"use client"; 

import { useEffect, useState } from "react";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import axios from "axios";

const StartupListClient = ({ initialPosts, query}: {initialPosts: any, query: any}) => {
  const [posts, setPosts] = useState(initialPosts);

  const fetchStartups = async () => {
    try {
      const response = await axios.post("https://launchpadbe.vercel.app/api/startups", {
        query,
      });
      setPosts(response.data.startups);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onopen = () => {
        console.log("WebSocket connection established");
      };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("WebSocket message received:", message);

      if (message.operationType === "insert" || message.operationType === "delete") {
        fetchStartups();
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, [query]);

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