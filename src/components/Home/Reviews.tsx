import { Pages } from "@/sanity/schemas/pages";
import { Reviews } from "@/sanity/schemas/reviews";
import Link from "next/link";
import { Button } from "../UI/button";
import { ProseH1, ProseLead, ProseP, ProseSubtle } from "../UI/typography";

export default function Component({
  reviews,
  limit,
  page,
}: {
  reviews: Reviews[];
  limit?: number;
  page: Pages[number];
}) {
  return (
    <section
      className={`bg-gray-50 dark:bg-slate-800 rounded px-4 sm:px-6 ${
        limit ? "space-y-6 py-8" : "space-y-8 py-12"
      }`}
    >
      <header className="md:text-center space-y-2">
        <ProseH1>{page.headline}</ProseH1>
        <ProseLead>{page.tagline}</ProseLead>
      </header>
      {limit ? (
        <div className="lg:col-span-2 lg:mx-0">
          <div className="carousel gap-4">
            {reviews.slice(0, limit).map((i, index) => (
              <div key={index} className="carousel-item h-fit">
                <blockquote className="max-w-xs sm:max-w-md bg-white dark:bg-slate-700/75 p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-pink-500 dark:text-white sm:text-2xl">
                      {i.title}
                    </h3>
                    <div className="line-clamp-6">
                      <ProseP>{i.message}</ProseP>
                    </div>
                    <ProseSubtle>
                      - <span className="uppercase">{i.name}</span>
                    </ProseSubtle>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {reviews.map((i, index) => (
            <div key={index}>
              <blockquote className="bg-white dark:bg-slate-700/75 p-10 rounded">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-pink-500 dark:text-white sm:text-2xl">
                    {i.title}
                  </h3>
                  <ProseP>{i.message}</ProseP>
                  <ProseSubtle>
                    - <span className="uppercase">{i.name}</span>
                  </ProseSubtle>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      )}
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/reviews">
            <Button variant="subtle" size="lg">
              Read the full reviews
            </Button>
          </Link>
        ) : (
          <>
            <ProseLead>
              More questions? Send us a message using the button below
            </ProseLead>
            <Link tabIndex={-1} href="/contact">
              <Button variant="subtle" size="lg">
                Send a message
              </Button>
            </Link>
          </>
        )}
      </footer>
    </section>
  );
}
