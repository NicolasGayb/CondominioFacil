# Usa uma imagem base com Maven e JDK 17
FROM maven:3.9.6-eclipse-temurin-17-alpine

WORKDIR /app

# Copia o Maven Wrapper e sua pasta oculta
COPY .mvn/ .mvn
COPY mvnw .

# Copia o POM principal
COPY pom.xml .

# Copia os módulos do projeto
COPY model ./model
COPY repository ./repository
COPY service ./service
COPY web ./web

# Garante permissão de execução para o Maven Wrapper
RUN chmod +x mvnw

# Converte finais de linha do mvnw para Unix (evita erro de execução)
RUN apk add --no-cache dos2unix && dos2unix mvnw

# Builda o projeto multi-módulo, pulando testes
RUN ./mvnw clean package -DskipTests

# Expõe a porta padrão do Spring Boot (ajuste se necessário)
EXPOSE 8080

# Comando para rodar o backend
CMD ["java", "-jar", "web/target/web-1.0.0.jar"]