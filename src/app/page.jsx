import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=8")
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendedAnime = reproduce(recommendedAnime, 8)
    return (
        <>
        {/* Anime populer */}
            <section>
                <Header title="Paling populer" linkTitle="semua" linkHref="/populer" />
                <AnimeList api={topAnime} />
            </section>

            {/* Anime terbaru */}
            <section>
                <Header title="Rekomendasi" />
                <AnimeList api={recommendedAnime} />
            </section>
        </>
    )
}

export default Page