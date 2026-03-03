import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UsersModule } from './users/users.module';
import { PrismaModule } from './core/database/prisma.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile: true,
      graphiql:true
    }),
    ConfigModule.forRoot(
      {
        isGlobal: true
        }
    ),
    UsersModule,
    PrismaModule
  ]
})
export class AppModule {}
