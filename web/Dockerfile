# Etapa 1 - Build da aplicação com Maven
FROM maven:3.9.4-eclipse-temurin-17 AS builder
WORKDIR /app

# Copia o projeto inteiro para a imagem
COPY . .

# Faz o build completo do projeto
RUN mvn clean install -DskipTests

# Etapa 2 - Imagem final para rodar o app (Spring Boot)
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copia apenas o jar gerado do módulo web
COPY --from=builder /app/web/target/web-1.0.0.jar app.jar

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]