import express, { type Request, type Response, type NextFunction } from 'express';
import { registerRoutes } from './routes';
import { setupVite, serveStatic, log } from './vite';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging for API responses with captured JSON
app.use((req, res, next) => {
const start = Date.now();
const path = req.path;

let capturedJsonResponse: unknown | undefined;

// Bind original res.json so we can intercept payloads
const originalResJson = res.json.bind(res);
// @ts-expect-error Express overloads cause typing friction here
res.json = function (bodyJson: unknown, ...args: unknown[]) {
capturedJsonResponse = bodyJson;
// @ts-expect-error pass-through to original json
return originalResJson(bodyJson, ...args);
};

res.on('finish', () => {
const duration = Date.now() - start;
if (path.startsWith('/api')) {
// let logLine = ${req.method} ${path} ${res.statusCode} in ${duration}ms;
let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
if (capturedJsonResponse !== undefined) {
try {
const json = JSON.stringify(capturedJsonResponse);
logLine += `:: ${json}`;
} catch {
// ignore stringify failures
}
}
if (logLine.length > 80) {
logLine = logLine.slice(0, 79) + '…';
}
log(logLine);
}
});

next();
});

(async () => {
// register routes and get the underlying http.Server
const server = await registerRoutes(app);

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
const status = err?.status || err?.statusCode || 500;
const message = err?.message || 'Internal Server Error';
res.status(status).json({ message });
});

// Dev vs prod assets
if (app.get('env') === 'development') {
await setupVite(app, server);
} else {
serveStatic(app);
}

const port = parseInt(process.env.PORT || '5173', 10);

// Correct listen signature for http.Server (Express)
server.listen(port, () => {
log(`serving on port ${port}`);
});
})().catch((e) => {
console.error('Fatal startup error:', e);
process.exit(1);
});