const {Book} = require('../models/book.model');

class BookService{
    
    static async addBook(newBook){
        try{
            return await Book.create(newBook);
        }
        catch(err){
            throw err;
        }
    }

    static async getAllBooks(){
        try{
            return await Book.findAll();
        }
        catch(err){
            throw err;
        }
    }

    static async getABook(id) {
        try {
          const theBook = await database.Book.findOne({
            where: { id: Number(id) }
          });
    
          return theBook;
        } catch (error) {
          throw error;
        }
      }

}

module.exports=BookService;