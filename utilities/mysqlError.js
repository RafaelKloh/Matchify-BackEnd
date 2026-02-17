
//TODO Função responsável por validar erros SQL
export async function mysqlErro(error) {
    //? pega o código do erro
    const errorCode = error.errno

    //! valida se o código existe
    if (errorCode) {
        var response = {}

        //* faz a validação para cada tipo de erro SQL mais comuns
        switch (errorCode) {

            case 1062:
                response = {
                    error: 'Duplicate Entry',
                    description: 'A record with this value already exists in the database.'
                };
                break;

            case 1048:
                response = {
                    error: 'Column Cannot Be Null',
                    description: 'A required field was not provided.'
                };
                break;

            case 1452:
                response = {
                    error: 'Foreign Key Constraint',
                    description: 'Cannot add or update a child row: a foreign key constraint fails.'
                };
                break;

            case 1451:
                response = {
                    error: 'Foreign Key Constraint',
                    description: 'Cannot delete or update a parent row: related records exist.'
                };
                break;

            case 1146:
                response = {
                    error: 'Table Not Found',
                    description: 'The specified table does not exist in the database.'
                };
                break;

            case 1054:
                response = {
                    error: 'Unknown Column',
                    description: 'One of the specified columns does not exist.'
                };
                break;

            case 1049:
                response = {
                    error: 'Unknown Database',
                    description: 'The specified database does not exist.'
                };
                break;

            case 1045:
                response = {
                    error: 'Access Denied',
                    description: 'Invalid database username or password.'
                };
                break;

            case 2002:
                response = {
                    error: 'Connection Refused',
                    description: 'Unable to connect to the MySQL server.'
                };
                break;

            case 1064:
                response = {
                    error: 'SQL Syntax Error',
                    description: 'There is a syntax error in the SQL query.'
                };
                break;

            default:
                response = {
                    error: 'Unhandled MySQL Error',
                    description: error.sqlMessage || 'An unhandled database error occurred.'
                };
                break;
        }
    }
    return response
}
