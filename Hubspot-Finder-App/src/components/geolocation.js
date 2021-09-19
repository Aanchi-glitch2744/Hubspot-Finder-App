import React, { useState } from "react";
import "../styles/geoloc.css";
const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/b6e7f2d0-1874-11ec-9f88-41fa3915186f"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
          
            <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/><br/>  
            <div className="row">
                <div className="col text-right">
                    <h2>Find your Location and IP</h2>
                    <p className="mt-3">
                        <button
                            className="btn btn-info"
                            onClick={getUserGeolocationDetails}
                        >
                            Find my details
                        </button>

                        <div className="row justify-content-right mt-3">
                            <div className="col-lg-12 align-self-start text-right text-dark">
                                {details && (
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Location :{" "}
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        </li>
                                        <li className="list-group-item">
                                            IP: {details.IPv4}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GeoLocation;
