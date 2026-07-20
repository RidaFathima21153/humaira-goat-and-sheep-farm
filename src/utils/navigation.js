export const MAPS_FARM_LINK = "https://maps.app.goo.gl/HX2aG73nJd8pCFsb9";

/**
 * Opens Google Maps directions from the user's current GPS location straight to Humaira Goat & Sheep Farm.
 */
export const openFarmDirections = () => {
  // Try using HTML5 Geolocation API for ultra-precise turn-by-turn routing
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Direct Google Maps route URL from user coordinates to farm link destination
        const routeUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/Humaira+Goat+and+Sheep+Farm/@13.123,75.123/data=!4m2!4m1!3e0`;
        window.open(routeUrl, '_blank', 'noopener,noreferrer');
      },
      (error) => {
        // Fallback to Google Maps Directions API URL which auto-resolves current location
        window.open(`https://www.google.com/maps/dir/?api=1&destination=Humaira+Goat+and+Sheep+Farm`, '_blank', 'noopener,noreferrer');
      },
      { timeout: 5000 }
    );
  } else {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=Humaira+Goat+and+Sheep+Farm`, '_blank', 'noopener,noreferrer');
  }
};
