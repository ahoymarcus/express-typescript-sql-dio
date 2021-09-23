
class DatabaseError extends Error {
	
	constructor(
		message: string,
		error: Error
	) {
		super(message);
	}
}


