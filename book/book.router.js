const express = require("express");
const app = express.Router()
const Book = require("./book.model")

app.get("/", async(req,res)=>{
	try{
		let data = await Book.find()
		res.send(data)

	} catch(e){
		res.send(e.massage)
	}
})

app.post('/',async(req,res)=>{
	// let data = req.body.area.split(",")
  const {name,author,image,price}=req.body
	try{
		let book = await Book.create({
			
			name,
			author,
			image,
			price,
		})
		res.status(200).send('Added Successfully')
	}catch(e){
      // res.status(404).send(e.massage)
	}
})


app.put('/', (req, res) => {
	const bookId = req.params.id;
	const { name, author } = req.body;
  
	Book.findOneAndUpdate({ bookId }, { name, author }, { new: true })
	  .then((book) => {
		if (book) {
		  res.json({ message: 'Book updated successfully' });
		} else {
		  res.status(404).json({ error: 'Book not found' });
		}
	  })
	  .catch((error) => {
		res.status(500).json({ error: 'Failed to update book' });
	  });
  });
  

app.delete("/", async (req, res) => {
	try {
	  let exists = await Book.findOneAndDelete({
		id: req.body.id,
		name: req.body.name,
	  });
	  console.log(exists, req.body.id, req.body.name);
  
	  res.status(200).send("Product deleted successfully");
	} catch (e) {    
	  res.send(e.massage);
	}
  });

  module.exports = app
