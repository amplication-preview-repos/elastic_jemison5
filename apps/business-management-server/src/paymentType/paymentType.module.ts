import { Module } from "@nestjs/common";
import { PaymentTypeModuleBase } from "./base/paymentType.module.base";
import { PaymentTypeService } from "./paymentType.service";
import { PaymentTypeController } from "./paymentType.controller";
import { PaymentTypeResolver } from "./paymentType.resolver";

@Module({
  imports: [PaymentTypeModuleBase],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService, PaymentTypeResolver],
  exports: [PaymentTypeService],
})
export class PaymentTypeModule {}
