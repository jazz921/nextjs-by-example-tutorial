import { getReviews } from "../lib/reviews";
import Link from "next/link";
import Heading from "@/components/Heading";

export const metadata = {
    title: 'Reviews'
}

const ReviewsPage = async () => {
    const reviews = await getReviews();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-row gap-5 flex-wrap">
                {reviews.map((review) => {
                    return (
                        <li key={review.title} className="bg-white border w-80 rounded shadow ease-in duration-300 hover:shadow-xl">
                            <Link href={`/reviews/${review.slug}`}>
                                <img
                                    src={review.image}
                                    alt={review.title}
                                    width="320"
                                    height="180"
                                    className="rounded-t"
                                />
                                <p className="py-1 text-center font-orbitron font-semibold">
                                    {review.title}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ReviewsPage;
