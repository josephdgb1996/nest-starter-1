import { Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';
import { InvalidGraphQLRequestError } from 'apollo-server-core/dist/requestPipeline';
import { Validator } from 'class-validator';
import { Messages } from '@enum/messages.enum';

/** Este scalar aceita datas nos formatos:
 * - timestamp (new Date().getTime())
 * - ISO string (new Date().toISOString())
 * O Resolver irá receber um objeto Date
 * O Resolver pode retornar Date, timestamp ou ISO string
 * A resposta do GraphQL será sempre uma ISO string
 */
@Scalar('Date')
export class DateScalar {
  validator = new Validator();

  /** Chamado quando o valor é recebido por meio de uma variável:
   *  query MinhaQuery($variavel: Date) {
   *    recebeDate(date: $variavel)
   *  }
   */
  parseValue(value: any): Date {
    let date: Date;

    const isInteger = (typeof value === 'number' && Number.isInteger(value));
    const isIsoString = (typeof value === 'string' && this.validator.isISO8601(value));

    if (value === null) {
      return null;
    } else if (isInteger || isIsoString) {
      date = new Date(value);
    }

    if (!date || isNaN(date.getTime())) {
      throw new InvalidGraphQLRequestError();
    }

    return date;
  }

  /** Chamado quando o valor é recebido diretamente:
   *  query {
   *    recebeDate1(date: 1555009092113)
   *    recebeDate2(date: "2019-04-11T18:58:33.321Z")
   *  }
   */
  parseLiteral(ast: { kind, value: string }): Date {
    let date: Date;

    if (ast.kind === Kind.NULL) {
      return null;
    } else if (ast.kind === Kind.INT) {
      date = new Date(parseInt(ast.value, 10));
    } else if (ast.kind === Kind.STRING && this.validator.isISO8601(ast.value)) {
      date = new Date(ast.value);
    }

    if (!date || isNaN(date.getTime())) {
      throw new InvalidGraphQLRequestError();
    }

    return date;
  }

  /** Converte o resultado do resolver para o valor que irá aparecer na resposta GraphQL
   *  O resolver pode retornar Date, timestamp ou ISO string
   *  Throws TypeError se o resolver retornar algo inválido
   */
  serialize(value: any): string {
    let date: Date;

    const isInteger = (typeof value === 'number' && Number.isInteger(value));
    const isIsoString = (typeof value === 'string' && this.validator.isISO8601(value));

    if (value === null) {
      return null;
    } else if (value instanceof Date) {
      date = value;
    } else if (isInteger || isIsoString) {
      date = new Date(value);
    }

    if (!date || isNaN(date.getTime())) {
      throw new TypeError(Messages.GRAPHQL_DATE_SCALAR_SERIALIZE_INVALID);
    }

    return date.toISOString();
  }
}
