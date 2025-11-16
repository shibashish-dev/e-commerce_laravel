import Banner from "@/Components/Banner";
import Ads from "@/Components/Home/Ads";
import Categories from "@/Components/Home/Categories";
import Features from "@/Components/Home/Features";
import NewArivals from "@/Components/Home/NewArivals";
import NewsLatter from "@/Components/Home/NewsLatter";
import Recomendations from "@/Components/Home/Recomendations";

import { setUser } from "@/Providers/Slices/userSlice";
import { Head } from "@inertiajs/react";
import { useDispatch } from "react-redux";

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
    categories,
    products,
    ads,
    recomended,
    features,
}) {
    const dispatch = useDispatch();
    dispatch(setUser(auth));
    return (
        <>
            <Head title="Welcome" />

            <div>
                {/* banner */}
                <Banner />
                {/* ./banner */}

                {/* features */}
                <Features features={features} />
                {/* ./features */}

                {/* categories */}
                <Categories categories={categories} />
                {/* ./categories */}

                {/* new arrival */}
                <NewArivals products={products} />
                {/* ./new arrival */}

                {/* ads */}
                {ads && <Ads ads={ads} />}
                {/* ./ads */}

                {/* product */}
                <Recomendations recomended={recomended} />
                {/* ./product */}

                {/* Newslatter */}
                <NewsLatter />
                {/* ./Newslatter */}
            </div>
        </>
    );
}
