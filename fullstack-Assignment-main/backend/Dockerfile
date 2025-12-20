# ===== BUILD STAGE =====
FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /app

# Copy project files
COPY . .

# Build the application
RUN mvn clean package -DskipTests

# ===== RUNTIME STAGE =====
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose port (Render will override)
EXPOSE 8080

# Run application
CMD ["java", "-jar", "app.jar"]