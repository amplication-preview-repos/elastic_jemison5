/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PaymentType as PrismaPaymentType,
  Store as PrismaStore,
} from "@prisma/client";

export class PaymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentType.count(args);
  }

  async paymentTypes<T extends Prisma.PaymentTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTypeFindManyArgs>
  ): Promise<PrismaPaymentType[]> {
    return this.prisma.paymentType.findMany<Prisma.PaymentTypeFindManyArgs>(
      args
    );
  }
  async paymentType<T extends Prisma.PaymentTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTypeFindUniqueArgs>
  ): Promise<PrismaPaymentType | null> {
    return this.prisma.paymentType.findUnique(args);
  }
  async createPaymentType<T extends Prisma.PaymentTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTypeCreateArgs>
  ): Promise<PrismaPaymentType> {
    return this.prisma.paymentType.create<T>(args);
  }
  async updatePaymentType<T extends Prisma.PaymentTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTypeUpdateArgs>
  ): Promise<PrismaPaymentType> {
    return this.prisma.paymentType.update<T>(args);
  }
  async deletePaymentType<T extends Prisma.PaymentTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTypeDeleteArgs>
  ): Promise<PrismaPaymentType> {
    return this.prisma.paymentType.delete(args);
  }

  async getStore(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.paymentType
      .findUnique({
        where: { id: parentId },
      })
      .store();
  }
}
