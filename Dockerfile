# Usar uma imagem base com JDK
FROM eclipse-temurin:17-jdk-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar todo o projeto para dentro do container
COPY . .

# Dar permissão para o wrapper Maven (mvnw)
RUN chmod +x web/mvnw

# Buildar o projeto inteiro, pulando testes e com debug
RUN ./web/mvnw clean package -DskipTests -X

# Definir o comando padrão para rodar a aplicação
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]