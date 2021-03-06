import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(User, dataSource);
  }

  findByCpf(cpf: string) {
    return this.find({ where: { cpf }, limit: 1 }).then(users => users[0]);
  }
}
