import { Module } from "@nestjs/common";
import { CreditLogModuleBase } from "./base/creditLog.module.base";
import { CreditLogService } from "./creditLog.service";
import { CreditLogController } from "./creditLog.controller";
import { CreditLogResolver } from "./creditLog.resolver";

@Module({
  imports: [CreditLogModuleBase],
  controllers: [CreditLogController],
  providers: [CreditLogService, CreditLogResolver],
  exports: [CreditLogService],
})
export class CreditLogModule {}
