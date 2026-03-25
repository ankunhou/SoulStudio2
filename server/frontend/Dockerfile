FROM node:25.8 AS build-stage

RUN npm install -g pnpm
ENV PNPM_CONFIG_LOGLEVEL=info
ENV PATH="/root/.pnpm/bin:$PATH"

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /app/
COPY frontend/package.json /app/frontend/

RUN pnpm install --filter frontend

COPY ./frontend /app/frontend
ARG VITE_API_URL



# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1

COPY --from=build-stage /app/frontend/dist/ /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
