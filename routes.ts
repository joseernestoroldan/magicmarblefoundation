/**
 * An array of routes that are accesible for all the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/about",
  "/diaries",
  "/donations",
  "/gallery",
  "/getinvolved",
  "/grantees",
  "/projects",
  "/projects/project/:id",
  "/projectscarousel",
];

/**
 * An array of routes that are used for athentication
 * These routes redirect users
 * @type {string[]}
 */

export const authRoutes = ["/register", "/login", "/new-verification", "/reset", "/new-password"];

/**
 * Prefix for API Athentication routes
 *Routes that start with this prefix are used for API athentication purposes 
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The redirect path after logining  
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/profile"
