import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly productName: string;

    @IsString()
    @MaxLength(6)
    @IsNotEmpty()
    readonly code: string;

    @Type(() => Date)
    @IsDate()
    readonly expirationDate: Date;
}