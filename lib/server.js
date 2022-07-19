import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
  console.log('gavau uzklausa...');

  res.end('STAI TAU SERVERIO ATSAKYMAS...');
});

server.init = () => {
  console.log('pasileidzia serveris...');
  server.httpServer.listen(65535);
}

export { server }


  //routes/pages
  //nukreipimas i kazkoki puslapi

  //kelias (url: get) -> funkcija, kuri grazina HTML
  //url -> HTML