/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StoreService } from "../store.service";
import { StoreCreateInput } from "./StoreCreateInput";
import { Store } from "./Store";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreWhereUniqueInput } from "./StoreWhereUniqueInput";
import { StoreUpdateInput } from "./StoreUpdateInput";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { DiscountFindManyArgs } from "../../discount/base/DiscountFindManyArgs";
import { Discount } from "../../discount/base/Discount";
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PaymentTypeFindManyArgs } from "../../paymentType/base/PaymentTypeFindManyArgs";
import { PaymentType } from "../../paymentType/base/PaymentType";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

export class StoreControllerBase {
  constructor(protected readonly service: StoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Store })
  async createStore(@common.Body() data: StoreCreateInput): Promise<Store> {
    return await this.service.createStore({
      data: data,
      select: {
        businessDescription: true,
        businessName: true,
        businessPhoneNumber: true,
        businessSector: true,
        country: true,
        createdAt: true,
        currency: true,
        id: true,
        logoUrl: true,
        primaryAddress: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Store] })
  @ApiNestedQuery(StoreFindManyArgs)
  async stores(@common.Req() request: Request): Promise<Store[]> {
    const args = plainToClass(StoreFindManyArgs, request.query);
    return this.service.stores({
      ...args,
      select: {
        businessDescription: true,
        businessName: true,
        businessPhoneNumber: true,
        businessSector: true,
        country: true,
        createdAt: true,
        currency: true,
        id: true,
        logoUrl: true,
        primaryAddress: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async store(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    const result = await this.service.store({
      where: params,
      select: {
        businessDescription: true,
        businessName: true,
        businessPhoneNumber: true,
        businessSector: true,
        country: true,
        createdAt: true,
        currency: true,
        id: true,
        logoUrl: true,
        primaryAddress: true,
        state: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStore(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() data: StoreUpdateInput
  ): Promise<Store | null> {
    try {
      return await this.service.updateStore({
        where: params,
        data: data,
        select: {
          businessDescription: true,
          businessName: true,
          businessPhoneNumber: true,
          businessSector: true,
          country: true,
          createdAt: true,
          currency: true,
          id: true,
          logoUrl: true,
          primaryAddress: true,
          state: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Store })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStore(
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Store | null> {
    try {
      return await this.service.deleteStore({
        where: params,
        select: {
          businessDescription: true,
          businessName: true,
          businessPhoneNumber: true,
          businessSector: true,
          country: true,
          createdAt: true,
          currency: true,
          id: true,
          logoUrl: true,
          primaryAddress: true,
          state: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  async findCustomers(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        email: true,
        fullname: true,
        id: true,
        phone: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customers")
  async connectCustomers(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  async updateCustomers(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  async disconnectCustomers(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/discounts")
  @ApiNestedQuery(DiscountFindManyArgs)
  async findDiscounts(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Discount[]> {
    const query = plainToClass(DiscountFindManyArgs, request.query);
    const results = await this.service.findDiscounts(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        maxDiscountAmount: true,
        name: true,

        store: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
        validFrom: true,
        validTo: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/discounts")
  async connectDiscounts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: DiscountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discounts: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/discounts")
  async updateDiscounts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: DiscountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discounts: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/discounts")
  async disconnectDiscounts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: DiscountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discounts: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/employees")
  @ApiNestedQuery(EmployeeFindManyArgs)
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        fullname: true,
        id: true,
        passcode: true,
        phone: true,

        role: {
          select: {
            id: true,
          },
        },

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  async connectEmployees(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  async updateEmployees(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  async disconnectEmployees(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        discount: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        note: true,
        paymentStatus: true,
        paymentType: true,
        products: true,
        salesChannel: true,

        store: {
          select: {
            id: true,
          },
        },

        tax: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/paymentTypes")
  @ApiNestedQuery(PaymentTypeFindManyArgs)
  async findPaymentTypes(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<PaymentType[]> {
    const query = plainToClass(PaymentTypeFindManyArgs, request.query);
    const results = await this.service.findPaymentTypes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/paymentTypes")
  async connectPaymentTypes(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: PaymentTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTypes: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentTypes")
  async updatePaymentTypes(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: PaymentTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTypes: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentTypes")
  async disconnectPaymentTypes(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: PaymentTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTypes: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  async findProducts(
    @common.Req() request: Request,
    @common.Param() params: StoreWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        barcode: true,

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        images: true,
        isPublished: true,
        lowQuantityStock: true,
        name: true,
        price: true,
        quantity: true,

        store: {
          select: {
            id: true,
          },
        },

        trackStock: true,
        unit: true,
        updatedAt: true,
        variants: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/products")
  async connectProducts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  async updateProducts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  async disconnectProducts(
    @common.Param() params: StoreWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.updateStore({
      where: params,
      data,
      select: { id: true },
    });
  }
}
