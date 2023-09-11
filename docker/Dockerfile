ARG nodeVersion
ARG devPort
ARG author

FROM node:${nodeVersion}

LABEL author=${author}

RUN corepack enable

RUN yarn set version stable

WORKDIR /app_dev

COPY . .

ENV TZ=Asia/Seoul

RUN yarn

EXPOSE ${devPort}

CMD ["yarn", "dev"]