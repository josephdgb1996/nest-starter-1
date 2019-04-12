/** Objeto definido pela função context em config/graphql.ts e retornado por
 *  GqlExecutionContext.create(executionContextHost).getContext()
 */
export interface GqlContext {
  req: any;
  res: any;
}
