FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY . .
COPY tsconfig.json .

ENV NODE_ENV production
ENTRYPOINT [ "./entrypoint.sh" ]
EXPOSE 3000