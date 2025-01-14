import { auth } from "@/auth";
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import UserStartups from './../../../components/UserStartups';
import { StartupCardSkeleton } from "@/app/components/StartupCard";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const response = await axios.post(
    `https://launchpad-be-z59x.onrender.com/api/get-author/${id}`
  );
  if (!response) return notFound();
  // console.log(response.data.author);
  const user = response.data.author;

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>
          <Image src={user.image} alt= {user.name} width={220} height={220} className="profile_image"/>
          <p className="text-30-extrabold mt-7 text-center">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-14-normal">
            {user?.bio}
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:mt-5">
          <p className="text-30-bold">
            {session?.id === id ? 'Your' : 'All'} Startups
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkeleton/>}>
              <UserStartups id={id}/>
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
