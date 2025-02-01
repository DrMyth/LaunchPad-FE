import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export type StartupTypeCard = {
  _id: number;
  title: string;
  slug: string;
  author: {
    _id: number;
    name: string;
    username: string;
    image: string;
  };
  views: number;
  description: string;
  category: string;
  image: string;
  pitch: string;
  date: Date;
};

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _id,
    title,
    author: { _id: authorId, name: authorName, image: authorImg},
    views,
    description,
    category,
    image,
    date,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(date)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary"></EyeIcon>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src={authorImg}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/home/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => {
      return (
        <li key={cn('skeleton', index)}>
          <Skeleton className="startup-card_skeleton"/>
        </li>
      );
    })}
  </>
);


export default StartupCard;
