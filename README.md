# Base para projetos Back End com NestJs

---

## Bibliotecas usadas

-   Nest config

```bash
npm i --save @nestjs/config
```

-   Validations

```bash
npm install --save class-validator class-transformer
```

-   OpenAPI

```bash
npm install --save @nestjs/swagger
```

### Banco de dados

-   MySQL | TypeOrm

```bash
npm install --save typeorm mysql2
```

-   Prisma

```bash
npm install --save-dev prisma
```

```bash
npx prisma
```

```bash
npx prisma init
```

```bash
npm install @prisma/client
```

## Google Cloud | Firebase

-   Identity Platform

```bash
npm install --save firebase-admin
```

```lua
.devcontainer
/src
    /config
        /database
            database.config.ts
            database.module.ts
        /email
            /templates
            email.config.ts
            email.module.ts
    /libs
        /prisma
            /migrations
            schema.prisma
    /modules
        /prisma
            prisma.module.ts
            prisma.service.ts
        /auth
            /client
                /domain
                    /services
                        auth-client.service.ts
                    /use-cases
                        validate-client.use-case.ts
                        login-client.use-case.ts
                /infra
                    /strategies
                        jwt-client.strategy.ts
                /presentation
                    /controllers
                        auth-client.controller.ts
                    /dtos
                auth-client.module.ts
            /manager
                /domain
                    /services
                        auth-manager.service.ts
                    /use-cases
                        validate-manager.use-case.ts
                        login-manager.use-case.ts
                /infra
                    /strategies
                        jwt-manager.strategy.ts
                /presentation
                    /controllers
                        auth-manager.controller.ts
                    /dtos
                auth-manager.module.ts
            /professional
                /domain
                    /services
                        auth-professional.service.ts
                    /use-cases
                        validate-professional.use-case.ts
                        login-professional.use-case.ts
                /infra
                    /strategies
                        jwt-professional.strategy.ts
                /presentation
                    /controllers
                        auth-professional.controller.ts
                    /dtos
                auth-professional.module.ts
            auth.module.ts
        /user
            /domain
                /entities
                    /value-objects
                    user.entity.ts
                /services
                    user.service.ts
                /use-cases
                    create-user.use-case.ts

            /infra
                /gateways
                    user-gateway-nodemailer.ts
                    user-gateway-interface.ts
                    user-gateway-typeorm.ts
                    user-gateway.prisma.ts
                /models
                    user.model.ts
            /presentation
                /controllers
                    user.controller.ts
                /dtos
                    create-user.dto.ts
                    update-user.dto.ts
        /payment
            /domain
                /services
                    payment.service.ts
                /use-cases
                    create-payment.use-case.ts
                    get-payment-status.use-case.ts
            /infra
                /gateways
                    payment-gateway-interface.ts
                    payment-gateway-paypal.ts
                    payment-gateway-stripe.ts
                    payment-gateway.ts
                /models
                    payment.model.ts
            /presentation
                /controllers
                    payment.controller.ts
                /dtos
                    create-payment.dto.ts
                    get-payment-status.dto.ts
    /shared
        /decorators
            is-public.decorator.ts
        /exceptions
            http-exception.filter.ts
        /guards
            auth.guard.ts
        /middlewares
            auth.middleware.ts
        /utils
            cleanCPF.ts
    app.module.ts
    main.ts
.env
.env.example
.eslintrc.js
.gitignore
.prettierrc
docker-compose.yml
docker-compose-dev.yml
Dockerfile
Dockerfile.dev
nest-cli.json
package-lock.json
package.json
README.md
tsconfig.build.json
tsconfig.json
```
