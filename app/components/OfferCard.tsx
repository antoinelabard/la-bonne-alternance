import {useEffect} from "react";

export function OfferCard({offer}) {
    useEffect(() => {
        if (!offer) {
            throw new Error("No offer prop provided")
        }
    })
    return (
        <div className="border-2 rounded m-5 p-5 w-1/2 flex flex-col">
            <h2 className="text-xl m-5">{offer.title}</h2>
            <p className="m-2">{offer.place.fullAddress}</p>
            <p className="m-2">{offer.url}</p>
            <p className="m-2">{offer.job.description}</p>
            <p className="m-2">{offer.job.creationDate}</p>
            <p className="m-2">{offer.job.contractType}</p>
        </div>
    )
}
