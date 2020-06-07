import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    debug: true,
    pool: {
        min: 2,
        max: 6,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        afterCreate: (conn: any, cb: any) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
    useNullAsDefault: true
});

export default connection;