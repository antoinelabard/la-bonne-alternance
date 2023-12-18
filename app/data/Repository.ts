export class Repository {
    static async getOffers() {
        return await fetch('https://labonnealternance.apprentissage.beta.gouv.fr/api/v1/jobs?romes=F1603%2CI1308&caller=contact%40domaine%20nom_de_societe&latitude=48.11694740788264&longitude=-1.679172319890059&radius=50&insee=35238')
            .then((response) => response.json())
            .then((data) => data.peJobs.results)
            .catch((e) => console.log(e))
    }
}