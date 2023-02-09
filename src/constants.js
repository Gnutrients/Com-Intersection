/**
 * This file is used to contain constants that the applicaton is using. 
 * 
 * Constants should have the ability to be set by considering runtime variables
 */


// This controls whether or not the application will use the DataStore to cache data that is obtained
// from a request to third party servers.
export const USE_DATASTORE = (process.env.USE_DATASTORE === "0") ? false : true;