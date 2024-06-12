/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreditLogWhereInput } from "./CreditLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreditLogOrderByInput } from "./CreditLogOrderByInput";

@ArgsType()
class CreditLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreditLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreditLogWhereInput, { nullable: true })
  @Type(() => CreditLogWhereInput)
  where?: CreditLogWhereInput;

  @ApiProperty({
    required: false,
    type: [CreditLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreditLogOrderByInput], { nullable: true })
  @Type(() => CreditLogOrderByInput)
  orderBy?: Array<CreditLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CreditLogFindManyArgs as CreditLogFindManyArgs };