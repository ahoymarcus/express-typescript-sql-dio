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
		const result = await db.query<User>(query);
		
		const rows = result.rows;
		
		return rows || [];
	}
}



export default new UserRepository();




