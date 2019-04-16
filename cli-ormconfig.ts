/** Arquivo usado pelo typeorm para gerar e rodar migrações
 *  Gera uma migração, comparando os modelos com o estado atual do banco:
 *    yarn typeorm migration:generate -n MinhaMigracao
 *  Gera uma migração vazia:
 *    yarn typeorm migration:create -n MinhaMigracao
 *  Roda as migrações
 *    yarn typeorm migration:run
 *  Zera o banco de dados
 *    yarn typeorm schema:drop
 */

import { DatabaseOptions } from './src/config/database';

module.exports = DatabaseOptions();
