export * from './1555085633092-User';
export * from './1555086286458-Message';

// Migrações que usam Repository não rodam corretamente se as tabelas estiverem diferentes das classes definidas em model/.
// O timestamp foi aumentado na mão para rodar após todas as alterações de tabela e não ocorrer esse problema.
export * from './11555086848793-InsertUserAdmin';
