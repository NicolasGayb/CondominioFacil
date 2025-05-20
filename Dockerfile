FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copia apenas o necessário primeiro para cache eficiente
COPY pom.xml .
COPY model ./model
COPY repository ./repository
COPY service ./service
COPY web ./web

# Builda o projeto multi-módulo, pulando testes, usando o Maven do container
RUN mvn clean package -DskipTests

EXPOSE 8082

CMD ["java", "-jar", "web/target/web-1.0.0.jar"]