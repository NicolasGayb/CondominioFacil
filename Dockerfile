# Usar uma imagem base com JDK
FROM eclipse-temurin:17-jdk-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar todo o projeto para dentro do container
COPY . .

# Dar permissão para o wrapper Maven (mvnw) da raiz do projeto
RUN chmod +x mvnw

# Buildar o projeto inteiro a partir do POM pai
RUN ./mvnw clean package -DskipTests

# Definir o comando padrão para rodar o .jar do módulo web
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]
