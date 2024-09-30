import { Platform } from "react-native";


let BASE_URL = '';

if (Platform.OS == 'web') {
    BASE_URL = 'http://127.0.0.1:8000/api/';
}
else {
    BASE_URL = process.env.EXPO_PUBLIC_NGROK + "/api/";
    console.log(BASE_URL);

}

export default {
    jobs: {
        active_jobs: BASE_URL + 'jobs/active/',
        archived_jobs: BASE_URL + 'jobs/archived/',
        materials: BASE_URL + 'jobs/materials/',
        state_history: BASE_URL + 'jobs/state-history/',
    },
    clients: {
        list: BASE_URL + "profiles/clients/",
    },
}