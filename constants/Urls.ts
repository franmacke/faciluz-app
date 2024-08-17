import { Platform } from "react-native";

let BASE_URL = '';

if (Platform.OS == 'web') {
    BASE_URL = 'http://127.0.0.1:8000/api/';
}
else {
    BASE_URL = "https://2dc6-181-110-67-107.ngrok-free.app/api/";
}

export default {
    jobs: {
        active_jobs: BASE_URL + 'jobs/active/',
        archived_jobs: BASE_URL + 'jobs/archived/',
    },
    clients: {
        list: BASE_URL + "profiles/clients/",
    }
}