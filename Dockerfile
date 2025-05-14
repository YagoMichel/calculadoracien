FROM maven:3.9-amazoncorretto-17 AS build
COPY . .
RUN mvn clean install -DskipTests


FROM amazoncorretto:17-alpine
COPY --from=build /target/*.jar demo.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "demo.jar"]
