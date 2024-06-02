#Astro project https://github.com/Appeiron-Tech/Maggie.git
FROM node:20 AS runtime
WORKDIR /user/src

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs