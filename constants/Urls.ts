const BASE_URL = 'http://127.0.0.1:8000/api/';

export default {
    jobs: {
        active_jobs: BASE_URL + 'jobs/active/',
        archived_jobs: BASE_URL + 'jobs/archived/',
    }
}