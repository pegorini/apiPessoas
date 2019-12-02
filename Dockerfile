FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/api-pessoas-0.0.1-SNAPSHOT.jar pessoas.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/pessoas.jar"]

