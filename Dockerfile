ARG VERSION=111021
FROM jac18281828/tsdev:${VERSION}

ARG PROJECT=searchjs
WORKDIR /workspaces/${PROJECT}

COPY package.json .

RUN npm install
RUN npm install typescript -g
RUN npm install eslint -g
RUN npm install @types/node -g

COPY .eslintrc .
COPY tsconfig.json .
COPY tslint.json .
COPY README.md .
COPY index.ts .
COPY src src/
COPY jsql jsql/
COPY data data/

RUN tsc
RUN eslint . --ext .ts

#build
CMD npm start
