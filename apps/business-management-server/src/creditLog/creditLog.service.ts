import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditLogServiceBase } from "./base/creditLog.service.base";

@Injectable()
export class CreditLogService extends CreditLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
