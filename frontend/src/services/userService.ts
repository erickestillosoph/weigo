import urlService from "./urlService";
// import httpService from "./httpService";

// PLEASE NOTE:
// This service is not used in the project.
// It is just a placeholder for future use.
// Please Refactor this is relation to its usecases

class UserService {
    user = null;

    // async getCurrentUserProfile() {
    //     const url = urlService.currentUserProfileUrl();
    //     try {
    //         // const response = await httpService.get(url);
    //         const response = url;
    //         this.user = response;
    //         return response;
    //     } catch (error) {
    //         console.error("Not able to fetch the user");
    //     }
    // }

    async getCurrentUserProfile() {
        const url = urlService.currentUserProfileUrl();
        try {
            const response = await fetch(url); // Make an HTTP request
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json(); // Parse the JSON data
            this.user = data;
            return data;
        } catch (error) {
            console.error("Not able to fetch the user", error);
        }
    }
}

export default new UserService();
