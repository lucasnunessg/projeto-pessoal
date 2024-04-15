# Use a imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Node.js estará escutando
EXPOSE 3333

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
