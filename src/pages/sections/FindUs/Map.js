import styles from "./Map.module.css"
import GoogleMapReact from 'google-map-react';

const Map = () => {

  const defaultProps = {
      center: {
          lat: 1.338824219648584,
          lng: 103.84967569636062
      },
      zoom: 15
  };
  const handleApiLoaded = (map, maps) => {
      const marker = new maps.Marker({
          position: {
              lat: 1.338824219648584,
              lng: 103.84967569636062
          },
          map,
          title: "Three",
      });
      const infowindow = new maps.InfoWindow({
          content: "<span>" +
              "<b>Three. By Garamika</b><br/>" +
              "<a style={{textDecoration: 'underline'}} " +
              "href='https://www.google.com/maps/dir/?api=1&destination=94%20Lor%204%20Toa%20Payoh,%20Singapore%20310094' " +
              "target='_blank'>Directions</a>" +
              "</span>",
          ariaLabel: "Three",
      });
      marker.addListener("click", () => {
          infowindow.open({
              anchor: marker,
              map,
          });
      });
      infowindow.open(map,marker);
  }

  return (
    <div className={styles.map}>
        Map
      {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBIG8fzBs_KavUxoGmkCZtwvwOvLX9eDQc" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
        </GoogleMapReact> */}
    </div>
  )
}

export default Map