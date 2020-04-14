import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (location) => setLat(location.coords.latitude),
      (err) => setErrorMessage(err)
    );
  }, []); // [] works as componentDidMount

  return [lat, errorMessage];
};
