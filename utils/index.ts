
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '7f558faf62msha69307c723174d0p1e2b63jsn6357bc7dd823',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const reponse =await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers:headers,
    });

    const result = await reponse.json();
    return result;
}