import { InputType, PartialType } from "@nestjs/graphql";
import { UserCreateDto } from "./create.dto";

@InputType()
export class UserUpdateDto extends PartialType(UserCreateDto) {}