const api = "http://ip-api.com/json/?fields=status,city,lat,lon,query"

export default async function getCurrentLocation() {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("La requête a échoué");
      }
      const data = await response.json();
      const currentLocation = {
        city: data.city,
        lat: data.lat,
        long: data.lon
      };
      return currentLocation;
    } catch (error) {
      console.error("Erreur lors de la récupération de la ville :", error);
      return null;
    }
  }