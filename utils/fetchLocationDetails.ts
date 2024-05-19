export const fetchLocationDetails = async (
  latitude: number,
  longitude: number
) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    if (data.status !== 'OK' || !data.results.length) {
      throw new Error('Unable to retrieve location details.');
    }
    const location = data.results[0];
    const addressComponents = location.address_components;
    const findComponent = (type: string) => {
      const component = addressComponents.find((c: any) =>
        c.types.includes(type)
      );
      return component ? component.long_name : '';
    };
    return {
      name:
        findComponent('locality') ||
        findComponent('sublocality') ||
        location.formatted_address,
      admin1: findComponent('administrative_area_level_1'),
      country: findComponent('country'),
      timezone: data.timezone,
    };
  } catch (error) {
    console.error('Unable to retrieve location details. Please try again.');
    return null;
  }
};
