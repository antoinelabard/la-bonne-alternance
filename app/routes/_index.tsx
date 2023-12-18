import type {MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {Repository} from "~/data/Repository";
import {OfferCard} from "~/components/OfferCard";

export const meta: MetaFunction = () => {
    return [
        {title: "MelodyMap"},
        {name: "description", content: "Welcome to MelodyMap!"},
    ];
};

export const loader = async () => {
    return {
        "offers": await Repository.getOffers(),
    }
}

export default function Index() {
    const {offers} = useLoaderData<typeof loader>()
    return (
        <main>
            <h1 className="text-4xl text-center align-middle my-20">La Bonne Alternance</h1>
            <div className="flex flex-col items-center">
                {offers.map((offer) => (
                <OfferCard offer={offer}/>
            ))}
            </div>
        </main>
    );
}
