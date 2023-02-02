import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001'//config api port
});


//instala o pm2 
//salva os arquivos do server 
//inicia os serviços entrando na pasta
//na pasta api digita pm2 start watch 
//na pasta rtmp server digita pm2 start index.js  --watch deve ser isso mas se vira ai se não é quadrado