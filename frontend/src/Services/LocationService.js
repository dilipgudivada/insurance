import { LOCATIONS_API } from "../Constants/urlConstants";

export const getLocations = () => {

    fetch(LOCATIONS_API, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.status === 200) {
                return data.response;
            } else {
                return data;
            }
        });
}