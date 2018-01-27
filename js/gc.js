// Intitalize gapi with given credetials 
// Update 
var CLIENT_ID = '20900029526-dosn990gnn1ghddjmn1jpvqml8rc59sm.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDrdugk-4krAGZdPVeRVWSamEzulIQGOMU';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}