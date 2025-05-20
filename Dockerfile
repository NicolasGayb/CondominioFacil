# Usa uma imagem base que já possui Maven e JDK 17
FROM maven:3.9.6-eclipse-temurin-17-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia a pasta do Maven Wrapper (.mvn), necessária para o mvnw funcionar
COPY .mvn/ .mvn

# Copia o arquivo do Maven Wrapper (mvnw) para o diretório de trabalho
COPY mvnw .

# Copia o POM principal do projeto (pai)
COPY pom.xml .

# Copia os diretórios dos módulos do projeto multi-módulo
COPY model ./model
COPY repository ./repository
COPY service ./service
COPY web ./web

# Garante permissão de execução para o arquivo mvnw
RUN chmod +x mvnw

# Instala o utilitário dos2unix para garantir que o mvnw está com final de linha correto (LF)
RUN apk add --no-cache dos2unix && dos2unix mvnw

# Realiza o build do projeto utilizando o Maven Wrapper, pulando os testes
RUN ./mvnw clean package -DskipTests

# Define o comando padrão para rodar a aplicação, apontando para o jar gerado do módulo web
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]