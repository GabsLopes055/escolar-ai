# Use a imagem oficial do Node.js como base
FROM node:18.18.0

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e yarn.lock para o diretório de trabalho
COPY package.json ./

# Instale as dependências

RUN npm install

# Copie os arquivos restantes para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação estará rodando
EXPOSE 4200

# Comando para iniciar a aplicação (altere conforme necessário)
CMD ["npm", "start"]
