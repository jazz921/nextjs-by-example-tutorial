import { getReview, getSlugs } from "@/app/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
import Heading from "@/components/Heading";

export const generateStaticParams = async () => {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params: { slug } }) => {
    const review = await getReview(slug)
    return {
        title: review.title
    }
}

const ReviewPage = async ({ params: { slug } }) => {
    const review = await getReview(slug);

    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline mb-1">
                <p>{review.date}</p>
                <ShareLinkButton />
            </div>
            <img
                src={review.image}
                alt={review.title}
                width="640"
                height="360"
                className="rounded mb-2"
            />
            <article
                dangerouslySetInnerHTML={{ __html: review.body }}
                className="prose text-slate-900 max-w-screen-sm"
            />
        </>
    );
};

export default ReviewPage;
