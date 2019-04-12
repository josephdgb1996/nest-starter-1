import { EnvNumber, EnvString } from '@decorator/env.decorator';

export type NodeEnv = 'development' | 'production';

// Variáveis de ambiente podem ser definidas pela linha de comando:
//    export NODE_ENV=production
//    export PORT=4444
//    yarn start
// Ou:
//    NODE_ENV=production PORT=444 yarn start
// Ou criando um arquivo .env na raiz do projeto, com linhas no formato PROPRIEDADE=valor:
//    NODE_ENV=production
//    PORT=4444

export class Env {
  @EnvString('NODE_ENV', 'development')
  static env: () => NodeEnv;

  @EnvNumber('PORT', 3000)
  static port: () => number;

  @EnvString('API_PREFIX', 'api')
  static apiPrefix: () => string;
}
