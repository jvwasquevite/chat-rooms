import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterUserRenameToClient1628167708209
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('user', 'client')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('client', 'user')
  }
}
