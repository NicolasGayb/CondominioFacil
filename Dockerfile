FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copie o Maven Wrapper e o POM principal
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

# Copie todos os módulos
COPY model ./model
COPY repository ./repository
COPY service ./service
COPY web ./web

# Dê permissão de execução ao wrapper
RUN chmod +x mvnw

# Build do projeto (a partir do POM pai)
RUN ./mvnw clean package -DskipTests

# Comando para rodar o jar
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]
