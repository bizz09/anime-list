import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";
// import Search from "./components/Search";

const Page = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
    // const topAnime = await response.json()

    const topAnime = await getAnimeResponse("top/anime", "limit=8")

    return (
        <>
        {/* Anime populer */}
            <section>
                <Header title="Paling populer" linkTitle="semua" linkHref="/populer" />
                <AnimeList api={topAnime} />
            </section>

            {/* Anime terbaru */}
            
        </>
    )
}

export default Page