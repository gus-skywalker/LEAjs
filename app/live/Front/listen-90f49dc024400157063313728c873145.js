new (function Listen() {
    this.act = async function(options, callback) {
        let defaults = {
            hostname: '127.0.0.1',
            port: 3000,
            dir: 'public'
        };
        options = Object.assign(defaults, options);

        let agent = this.agent;
        
        let http = await import('http');
        let express = (await import('express')).default;
        const app = express();
        const server = http.createServer(app);
        // TODO não deixa ligar vários servidores
        agent.app = app;
        agent.server = server;
        
        // Setting up the public directory
        app.use(express.static(options.dir));
        /**/
        // Sessão
        const session = (await import('express-session')).default;
        const sessionParser = session({
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET || 'segredo',
            resave: false,
            //cookie: { secure: false }
        });
        app.use(sessionParser);
        /**/
        
        // Setting up POST parser
        let bodyParser = (await import('body-parser')).default;
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        
        let io = (await import('socket.io')).default;
        let sio = io(server);
        agent.io = sio;
        sio.on('connection', (socket) => {
            agent.see('onSocketConnection', socket);
        });
        sio.use(function(socket, next) {
            sessionParser(socket.request, socket.request.res || {}, next);
        });

        // Rotas
        // TODO colocar numa ação
        /**/
        var router = express.Router();
        router.all([
            '/',
            '/:agent',
            '/:agent/:action',
            '/:agent/:action/*'
        ], (req, res) => {
            agent.see('http', [req, res]);
        });
        app.use('/', router);
        /**/

        server.listen(options.port, options.hostname, () => {
        console.log(`Server running at http://${options.hostname}:${options.port}/`);
        });
        
        agent.see('notify', 'serverInitialized');
        
        callback();
    }
})();
