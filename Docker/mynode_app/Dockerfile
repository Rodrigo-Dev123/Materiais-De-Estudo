ARG NODE_VERSION=21.1.0

FROM node:${NODE_VERSION}

ENV PORT=3001
ENV MESSAGE="Hello Docker!"

# RUN useradd -m mynode
USER 1001

WORKDIR /app

COPY . .

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "executable" ]

CMD ["node", "index.js"]