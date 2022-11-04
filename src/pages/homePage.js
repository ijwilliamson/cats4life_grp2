import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";

const HomePage = ({addToBasket, breed}) => {

    return (
    <>
        <Hero />
        <Search callback={addToBasket} breed={breed} />
    </>
)
}

export default HomePage