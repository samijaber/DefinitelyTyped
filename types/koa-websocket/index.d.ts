// Type definitions for koa-websocket 5.0
// Project: https://github.com/kudos/koa-websocket
// Definitions by: Maël Lavault <https://github.com/moimael>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import * as ws from 'ws';
import * as http from 'http';
import * as https from 'https';

type KoaWebsocketConnectionHandler = (socket: ws) => void;
type KoaWebsocketMiddleware = (this: KoaWebsocketMiddlewareContext, context: Koa.Context, next: () => Promise<any>) => any;
interface KoaWebsocketMiddlewareContext extends Koa.Context {
    websocket: ws;
    path: string;
}

declare class KoaWebsocketServer {
    app: Koa;
    middleware: Koa.Middleware[];

    constructor(app: Koa);
    listen(options: ws.ServerOptions): ws.Server;
    onConnection(handler: KoaWebsocketConnectionHandler): void;
    use(middleware: KoaWebsocketMiddleware): this;
}

interface KoaWebsocketApp extends Koa {
    ws: KoaWebsocketServer;
}

declare function websockets(app: Koa): KoaWebsocketApp;
export = websockets;
