import * as graphql from "@nestjs/graphql";
import { CreditLogResolverBase } from "./base/creditLog.resolver.base";
import { CreditLog } from "./base/CreditLog";
import { CreditLogService } from "./creditLog.service";

@graphql.Resolver(() => CreditLog)
export class CreditLogResolver extends CreditLogResolverBase {
  constructor(protected readonly service: CreditLogService) {
    super(service);
  }
}
