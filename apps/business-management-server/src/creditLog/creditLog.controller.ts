import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditLogService } from "./creditLog.service";
import { CreditLogControllerBase } from "./base/creditLog.controller.base";

@swagger.ApiTags("creditLogs")
@common.Controller("creditLogs")
export class CreditLogController extends CreditLogControllerBase {
  constructor(protected readonly service: CreditLogService) {
    super(service);
  }
}
