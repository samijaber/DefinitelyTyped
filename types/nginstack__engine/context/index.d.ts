export let connection: import('../lib/connection/Connection.js');
export let database: import('../lib/database/Database.js');
export let dbCache: import('../lib/database/DBCache.js');
export let engine: import('../lib/engine/Engine.js');
export let request: import('../lib/http/Request.js');
export let response: import('../lib/http/Response.js');
export let session: import('../lib/session/Session.js');
export let tempDB: import('../lib/ido/IdoDB.js');
export let vendor: {
    name: string;
    legalName: string;
    siteUrl: string;
    systemName: string;
    logoUrl: string | number;
    logoTitle: string;
    footerLogoUrl: string | number;
    footerLogoTitle: string;
    mainMenuLogoUrl: string;
    appBarLogoUrl: string;
    faviconUrl: string;
    colors: import('./vendor.js').ThemeColors;
};
