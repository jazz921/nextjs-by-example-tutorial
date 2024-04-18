import { getFeaturedReview } from "./lib/reviews";
import Heading from "@/components/Heading";
import Link from "next/link";

export default async function HomePage() {
    const featuredReview = await getFeaturedReview() 
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p>Only the best indie game reviewed for you</p>
            <div className="bg-white border rounded w-80 shadow ease-in duration-300 hover:shadow-xl sm:w-full">
                <Link 
                    href={`/reviews/${featuredReview.slug}`}
                    className="flex flex-col sm:flex-row"    
                >
                    <img
                        src={featuredReview.image}
                        alt={featuredReview.title}
                        width="320"
                        height="180"
                        className="rounded-t sm:rounded-l sm:rounded-r-none"
                    />
                    <p className="py-1 text-center font-orbitron font-semibold m-auto sm:px-5">
                        {featuredReview.title}
                    </p>
                </Link>
            </div>
        </>
    );
}
