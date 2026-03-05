import { PartialType } from "@nestjs/graphql";
import { PostCreateDto } from "./create.dto";

export class PostUpdateDto extends PartialType(PostCreateDto){}