import { Module } from "@nestjs/common";
import { StoreModule } from "./store/store.module";
import { CustomerModule } from "./customer/customer.module";
import { OrderModule } from "./order/order.module";
import { RoleModule } from "./role/role.module";
import { CreditLogModule } from "./creditLog/creditLog.module";
import { PaymentTypeModule } from "./paymentType/paymentType.module";
import { DiscountModule } from "./discount/discount.module";
import { EmployeeModule } from "./employee/employee.module";
import { TaxModule } from "./tax/tax.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { UserModule } from "./user/user.module";
import { VariantModule } from "./variant/variant.module";
import { OptionModule } from "./option/option.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StoreModule,
    CustomerModule,
    OrderModule,
    RoleModule,
    CreditLogModule,
    PaymentTypeModule,
    DiscountModule,
    EmployeeModule,
    TaxModule,
    ProductModule,
    CategoryModule,
    SubscriptionModule,
    UserModule,
    VariantModule,
    OptionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
