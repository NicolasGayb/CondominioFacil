FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copia apenas o necessário primeiro para cache eficiente
COPY pom.xml .
COPY model ./model
COPY repository ./repository
COPY service ./service
COPY web ./web

# Builda o projeto multi-módulo, pulando testes
RUN mvn clean package -DskipTests

# Porta dinâmica (o Render define a variável $PORT)
EXPOSE 8080

# Executa o JAR passando a porta definida pelo Render
CMD ["sh", "-c", "java -jar web/target/web-1.0.0.jar --server.port=$PORT"]
# Nota: O Render define a variável de ambiente PORT, que é usada para especificar a porta na qual o aplicativo deve escutar.