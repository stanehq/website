import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateContactDto {
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  message?: string;
}
