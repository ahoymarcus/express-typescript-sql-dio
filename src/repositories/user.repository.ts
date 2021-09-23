// Lembrando que o objeto 'db' é o Pool de conexões exportado por db.ts
import db from '../db';
import User from '../models/user.model';





class UserRepository {
	
	async findAllUsers(): Promise<User[]> {
		const query = `
			SELECT uuid, username 
				FROM application_user
		`;
		
		/* MODELO 1
		db.query<User>(query).then((result) => {
			result.rows[0].username
		});*/
		/*MODELO 2*/
		const { rows } = await db.query<User>(query);
		//const rows = result.rows;
		
		return rows || [];
	}
	
	
	/*ATENÇÃO*/
	// não passar a variável uuid diretamente 
	// para a query string para evitar SQL 
	// Injection
	async findById(uuid: string): Promise<User> {
		const query = `
			SELECT uuid, username
				FROM application_user
				WHERE uuid = $1
		`;
		
		const values = [uuid];
		
		const { rows } = await db.query<User>(query, values);
		
		const [ user ] = rows;
		// const user = rows[0];
		
		return user;
	}
}



export default new UserRepository();




