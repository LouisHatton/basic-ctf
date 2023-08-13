import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';

export const db = new Database(DB_PATH, { verbose: console.log });
addPasswordTableData();

function addPasswordTableData() {
	const createTableQuery = `
    create table if not exists users (
        id integer primary key autoincrement,
        username text,
        password text,
        used_for text
    ) strict;
    `;
	const t = db.prepare(createTableQuery);
	t.run();

	if (fetchUserProfile('admin', 'password').length === 0) {
		addUser('admin', 'password', 'you thought it could be that easy, huh?');
		addUser('hugo', '8ff0a5224eadab5cfa5bdf805f51cedf', 'ubuntu-server-ssh');
		addUser('root', 'rsa', 'ubuntu-server-root, my-sql-server-root');
		addUser('hugo-woods', 'hugo_is_the_best_4_ever', 'myspace, vine');
	}
}

function addUser(username: string, password: string, usedFor: string) {
	const sql = `
    insert into users (username, password, used_for)
    values ($username, $password, $usedFor)
    `;
	const query = db.prepare(sql);
	query.run({ username, password, usedFor });
}

export function fetchUserProfile(username: string, password: string): unknown[] {
	const sql = `
    select * from users where username = '${username}' AND password = '${password}'
    `;
	const t = db.prepare(sql);
	return t.all();
}
