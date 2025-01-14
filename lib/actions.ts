"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import axios from "axios";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await auth();

  if (!session) {
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: { _type: slug, current: slug },
      pitch,
    };

    const authorResponse = await axios.post(
        `https://launchpad-be-z59x.onrender.com/api/get-author/${session?.id}`
    );
    // console.log(authorResponse.data);
    const author = authorResponse.data.author._id;

    const result = await axios.post(
      "https://launchpad-be-z59x.onrender.com/api/create-startup",
      {
        ...startup,
        author
      }
    );

    return parseServerActionResponse({
        ...result.data.startup,
        error: "",
        status: "SUCCESS",
    });
  } catch (e) {
    console.log(e);
    return parseServerActionResponse({
      error: JSON.stringify(e),
      status: "ERROR",
    });
  }
};
