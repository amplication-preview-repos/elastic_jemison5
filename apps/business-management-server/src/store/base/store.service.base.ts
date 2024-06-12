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
  Store as PrismaStore,
  Customer as PrismaCustomer,
  Discount as PrismaDiscount,
  Employee as PrismaEmployee,
  Order as PrismaOrder,
  PaymentType as PrismaPaymentType,
  Product as PrismaProduct,
} from "@prisma/client";

export class StoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StoreCountArgs, "select">): Promise<number> {
    return this.prisma.store.count(args);
  }

  async stores<T extends Prisma.StoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreFindManyArgs>
  ): Promise<PrismaStore[]> {
    return this.prisma.store.findMany<Prisma.StoreFindManyArgs>(args);
  }
  async store<T extends Prisma.StoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreFindUniqueArgs>
  ): Promise<PrismaStore | null> {
    return this.prisma.store.findUnique(args);
  }
  async createStore<T extends Prisma.StoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreCreateArgs>
  ): Promise<PrismaStore> {
    return this.prisma.store.create<T>(args);
  }
  async updateStore<T extends Prisma.StoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreUpdateArgs>
  ): Promise<PrismaStore> {
    return this.prisma.store.update<T>(args);
  }
  async deleteStore<T extends Prisma.StoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreDeleteArgs>
  ): Promise<PrismaStore> {
    return this.prisma.store.delete(args);
  }

  async findCustomers(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customers(args);
  }

  async findDiscounts(
    parentId: string,
    args: Prisma.DiscountFindManyArgs
  ): Promise<PrismaDiscount[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .discounts(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findPaymentTypes(
    parentId: string,
    args: Prisma.PaymentTypeFindManyArgs
  ): Promise<PrismaPaymentType[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentTypes(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }
}