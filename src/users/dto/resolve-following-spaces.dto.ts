import {ArgsType, Field, InputType, Int} from '@nestjs/graphql';
import {Min} from 'class-validator';
import {OrderBy} from '../../paginate/order-by.enum';

@InputType('ResolveFollowingSpacesArgsOrderBy')
export class ResolveFollowingSpacesArgsOrderBy {
  @Field(() => OrderBy, {nullable: true, defaultValue: OrderBy.DESC})
  updatedAt!: OrderBy;
}

@ArgsType()
export class ResolveFollowingSpacesArgs {
  @Field((_type) => String, {nullable: true})
  after?: string;

  @Field(() => Int)
  @Min(1)
  first!: number;

  @Field(() => Boolean, {defaultValue: false})
  finished!: boolean;

  @Field(() => ResolveFollowingSpacesArgsOrderBy, {
    defaultValue: new ResolveFollowingSpacesArgsOrderBy(),
  })
  orderBy!: ResolveFollowingSpacesArgsOrderBy;
}
