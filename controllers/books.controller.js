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
                util.setSuccess(200,"No Book Found")
            }
            return util.send(res);
            
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }  
}

module.exports = BookController;