import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
// import Search from "./components/Search";

export default async function Home() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
    const topAnime = await response.json()
    // console.log(anime)
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