FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY . .
WORKDIR /app/web
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests
CMD ["java", "-jar", "target/web-1.0.0.jar"]