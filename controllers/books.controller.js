const BookService = require('../services/bookService')
const Util = require('../utils/controller.helpers')
const util = new Util();
class BookController{

    static async addBook(req, res) {
        if (!req.body.title || !req.body.price || !req.body.author) {
          util.setError(400, 'Please provide complete details');
          return util.send(res);
        }
        const newBook = req.body;
        try {
          const createdBook = await BookService.addBook(newBook);
          util.setSuccess(201, 'Book Added!', createdBook);
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

    static async getAllBook(req, res){
        try {
            const allBooks = await BookService.getAllBooks();
            if(allBooks.length > 0){
                util.setSuccess(200,"Retrieved All Books", allBooks);
            }
            else{
                util.setError(404,`No Book Found`)
            }
            return util.send(res);
            
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    } 

    static async getBook(req, res){
      const { id } = req.params;

      if (!Number(id)) {
        util.setError(400, 'Please input a valid numeric value');
        return util.send(res);
      }
        try {
              const book = await BookService.getBook(id);
              if(book){
                util.setSuccess(200,"Book retrieved", book);
              }
              else{
                util.setError(404, `Cannot find book with the id ${id}`);
              }
          util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
    }
    
    static async updateBook(req, res){
      const { id } = req.params;
      const bookUpdate = req.body;
      if (!Number(id)) {
        util.setError(400, 'Please input a valid numeric value');
        return util.send(res);
      }
        try {
              const book = await BookService.updateBook(id, bookUpdate);
              if(book){
                util.setSuccess(200,"Book retrieved", book);
              }
              else{
                util.setError(404, `Cannot find book with the id ${id}`);
              }
              util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
    } 

    static async deleteBook(req, res) {
      const { id } = req.params;

      if (!Number(id)) {
        util.setError(400, 'Please input a valid numeric value');
        return util.send(res);
      }
      try{
        const book = await BookService.deleteBook(id);
        if(book){
          util.setSuccess(200,`book with id ${id} deleted successfully`);
        }
        else{
          util.setError(400, `Book with id ${id} does not exist`);
        }
        util.send(res);
      }catch(error){
        util.setError(400, error.message);
        util.send(res);
      }
    }
}

module.exports = BookController;