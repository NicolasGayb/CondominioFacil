FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY . .
RUN chmod +x web/mvnw
RUN ./web/mvnw clean package -DskipTests
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]