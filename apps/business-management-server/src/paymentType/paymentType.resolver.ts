import * as graphql from "@nestjs/graphql";
import { PaymentTypeResolverBase } from "./base/paymentType.resolver.base";
import { PaymentType } from "./base/PaymentType";
import { PaymentTypeService } from "./paymentType.service";

@graphql.Resolver(() => PaymentType)
export class PaymentTypeResolver extends PaymentTypeResolverBase {
  constructor(protected readonly service: PaymentTypeService) {
    super(service);
  }
}
