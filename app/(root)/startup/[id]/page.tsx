import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link  from 'next/link';
import Image from "next/image";
import markdownit from "markdown-it";
import { Suspense } from "react";
import { Skeleton } from "@/app/components/ui/skeleton";
import View from '@/app/components/View';
import axios from "axios";
import StartupCard, { StartupTypeCard } from "@/app/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;
export const revalidate = 60;
export const dynamicParams = true;

// export async function generateStaticParams() {
//     try {
//         const response = await fetch(`https://launchpadbe.vercel.app/api/startups`, {
//             method: 'POST',
//         });
//         if (!response.ok) {
//             throw new Error('Failed to fetch startups');
//         }

//         const res = await response.json();
//         const startups = res.startups;
//         console.log("Generated static params for startup page");
//         return startups.map((startup: any) => ({
//             id: startup.id, 
//         }));
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// };

const page = async ({params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id;

    const [response, resp] = await Promise.all([
        fetch(`https://launchpadbe.vercel.app/api/startup-details/${id}`, {
            next: { revalidate: 60 },
        }),
        axios.get("https://launchpadbe.vercel.app/api/startups-by-slug/editor-picks")
    ])

    // const response = await fetch(`https://launchpadbe.vercel.app/api/startup-details/${id}`, {
    //     next: { revalidate: 60 },
    // });
    // console.log(response);
    const posts = await response.json();
    const post = posts.startups;
    // console.log(post);
    // const resp = await axios.get("https://launchpadbe.vercel.app/api/startups-by-slug/editor-picks");
    // console.log(resp);
    const editorPicks = resp.data.select;
    // console.log("Editor Picks: ", editorPicks);

    if(!post) return notFound();

    const parsedContent = md.render(post?.pitch || "");

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <p className="tag"> {formatDate(post?.date)}</p>
                <h1 className="heading">{post.title}</h1>
                <p className="sub-heading !max-w-5xl">{post.description}</p>
            </section>

            <section className="section_container">
                <img src={post.image} alt="thumbnail" className="w-full h-auto rounded-xl"/>
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex-between gap-5">
                        <Link href={`/user/${post.author?._id}`} className="flex gap-2 items-center mb-3">
                            <Image src={post.author?.image} alt="avatar" width={64} height={64} className="rounded-full drop-shadow-lg"/>
                            <div>
                                <p className="text-20-medium">{post.author?.name}</p>
                                <p className="text-16-medium !text-black-300">@{post.author?.username}</p>
                            </div>
                        </Link>
                        <p className="category-tag">{post.category}</p>
                    </div>
                    <h3 className="text-30-bold">Pitch Details</h3>
                    {parsedContent ? (
                        <article dangerouslySetInnerHTML={{__html: parsedContent}} className="prose max-w-4xl font-work-sans break-all"/>
                    ): (
                        <p className="no-result">No details provided</p>
                    )}
                </div>
                
                <hr className="divider"/>
                {editorPicks?.length > 0 && (
                    <div className="max-w-4xl mx-auto">
                        <p className="text-30-bold">Editor Picks</p>
                        <ul className="my-7 card_grid-sm">
                            {editorPicks.map((startup: StartupTypeCard) => {
                                return (
                                <StartupCard key={startup._id} post={startup}/>
                                );
                            })}
                        </ul>
                    </div>
                )}

                <Suspense fallback={<Skeleton className="view_skeleton"/>}>
                    <View id = {id}/>
                </Suspense>

            </section>
        </>
    )
}

export default page