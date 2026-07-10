FROM golang:latest AS builder

LABEL maintainer="Rodrigo"
LABEL env="production"

WORKDIR /app
COPY . .

RUN CGO_ENABLED=0 go build -o server main.go
ENTRYPOINT ["./server"]
CMD ["8080"]

# Final Stage
# FROM scratch
# COPY --from=builder /app/server /server